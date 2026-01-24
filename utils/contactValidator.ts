import {getTranslations} from "next-intl/server";

export async function validateContactForm(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const t = await getTranslations('contact.form.errors');
    const errors: Record<string, string[] | undefined> = {};
    // Clean function
    function clean(text: string) {
        return text
            .replace(/<script.*?>.*?<\/script>/gi, "")
            .replace(/<\/?[^>]+(>|$)/g, "")
            .replace(/[\r\n]/g, " ")
            .trim();
    }
    const name = clean(data.name || "");
    const email = clean(data.email || "");
    const subject = clean(data.subject || "");
    const message = clean(data.message || "");
    // Name
    if (!name) errors.name = [t('name.name')];
    else if (name.length < 2) errors.name = [t('name.short')];
    else if (name.length > 50) errors.name = [t('name.long')];
    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email) errors.email = [t('mail.mail')];
    else if (!emailRegex.test(email)) errors.email = [t('mail.short')];
    else if (email.length > 100) errors.email = [t('mail.long')];
    // Header injection
    if (/[\r\n]/.test(email) || /[\r\n]/.test(subject)) {
        errors.global = [t('subject.header')];
    }
    // Subject
    if (!subject) errors.subject = [t('subject.subject')];
    else if (subject.length < 3) errors.subject = [t('subject.short')];
    else if (subject.length > 100) errors.subject = [t('subject.long')];
    // Message
    if (!message) errors.message = [t('message.message')];
    else if (message.length < 10)
        errors.message = [t('message.short')];
    else if (message.length > 500)
        errors.message = [t('message.long')];
    return {
        isValid: !Object.values(errors).some(e => e !== undefined),
        errors,
        cleanData: {
            name,
            email,
            subject,
            message
        }
    };
}
