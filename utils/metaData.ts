import {getTranslations} from "next-intl/server";

export async function seoMetadata(locale:string, pages:string) {
    const t = await getTranslations( {locale});
    const seo = t.raw('seo');

    return {
        title: seo.title[pages],
        description: seo.description[pages],
        keywords: seo.skills[pages],
        robots: seo.robots,
        alternates: { canonical: seo.url },
        openGraph: {
            title: seo.title[pages],
            description: seo.description[pages],
            url: seo.url,
            siteName: seo.siteName,
            locale: seo.locale,
            type: 'website',
        },
    };
}
