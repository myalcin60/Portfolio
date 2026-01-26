import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;
    return {
        locale,
        messages: {
            home: (await import(`../messages/home/${locale}.json`)).default,
            seo: (await import(`../messages/seo/${locale}.json`)).default,
            contact: (await import(`../messages/contact/${locale}.json`)).default,
            project: (await import(`../messages/project/${locale}.json`)).default,
            navbar: (await import(`../messages/navbar/${locale}.json`)).default,
            footer: (await import(`../messages/footer/${locale}.json`)).default,
            testing: (await import(`../messages/testing/${locale}.json`)).default,
            education: (await import(`../messages/education/${locale}.json`)).default,
            about: (await import(`../messages/about/${locale}.json`)).default,
        }
    };
});
