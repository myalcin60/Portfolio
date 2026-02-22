import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'fr','tr'],
    defaultLocale: 'fr',
    localePrefix:'as-needed'
});
