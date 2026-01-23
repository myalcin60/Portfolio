"use server";

import nodemailer from "nodemailer";

export async function sendContactForm(prevState, formData) {

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const errors = {
        name: undefined,
        email: undefined,
        subject: undefined,
        message: undefined
    };

    if (!name) errors.name = ["Name is required"];
    if (!email) errors.email = ["Email is required"];
    if (!subject) errors.subject = ["Subject is required"];
    if (!message) errors.message = ["Message is required"];

    if (Object.values(errors).some(e => e !== undefined)) {
        return { success: false, errors };
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        // SMTP bağlantı testi
        await transporter.verify();
        console.log("SMTP bağlantısı OK ✅");

        // Mail gönderme
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: `Contact: ${subject}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `
        });

        console.log("Mail gönderildi ✅");

        return { success: true, errors: {} };

    } catch (error) {

        console.error("MAIL ERROR:", error);

        return {
            success: false,
            errors: {
                global: ["Mail gönderilemedi. Lütfen daha sonra tekrar deneyin."]
            }
        };
    }
}
