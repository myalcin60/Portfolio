"use server";

import nodemailer from "nodemailer";
import { validateContactForm } from "@/utils/contactValidator";
import {checkRateLimit} from "@/utils/rateLimit";
import {getTranslations} from "next-intl/server";

export async function sendContactForm(prevState, formData) {
    const t = await getTranslations('contact.form');
    // Honeypot
    if (formData.get("website")) {
        return {
            success: false,
            message: null,
            errors: {}
        };
    }
    // Rate limit
    const ip = prevState?.req?.headers?.get("x-forwarded-for") || "unknown";
    if (checkRateLimit(ip)) {
        return {
            success: false,
            message: null,
            errors: {
                global: ["errors.rateLimit"]
            }
        };
    }
    // Form data
    const rawData = {
        name: formData.get("name")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        subject: formData.get("subject")?.toString() || "",
        message: formData.get("message")?.toString() || ""
    };
    // Validation
    const result =await validateContactForm(rawData);
    if (!result.isValid) {
        return {
            success: false,
            message: null,
            errors: result.errors
        };
    }
    const { name, email, subject, message } = result.cleanData;
    // Mail
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: `Contact: ${subject}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message} `
            });
        return {
                success: true,
                message: "success",
                errors: {}
            };

    } catch (err) {
        console.error(err);
        return {
            success: false,
            message: null,
            errors: {
                global: ["errors.error"]
            }
        };
    }
}
