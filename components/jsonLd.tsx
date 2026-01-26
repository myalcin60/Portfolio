'use client'
import Script from 'next/script';
import {useTranslations} from "next-intl";
import {useEffect, useMemo} from "react";

interface JsonLdProps {
    pageKey: string;
}
export default function JsonLd({pageKey}: JsonLdProps) {
    const seoMessages= useTranslations("seo")
    const t = useTranslations();
    const seo = t.raw('seo');

    const jsonLdData = useMemo(() => {
         const skills = seo.skills ?? [];
        return {
            "@context": seoMessages("@context"),
            "@type": seoMessages("@type"),
            name: seoMessages("name"),
            jobTitle: seoMessages(`jobTitle`),
            worksFor: {
                "@type": seoMessages("worksFor.@type"),
                name: seoMessages("worksFor.name")
            },
            url: seoMessages("url"),
            sameAs: [
                seoMessages("linkedin"),
                seoMessages("malt"),
            ],
            address: seo.address,
            title: seoMessages(`title.${pageKey}`),
            description:seoMessages(`description.${pageKey}`),
            knowsAbout: skills
        };
    }, [seoMessages, seo, pageKey]);
    useEffect(() => {
        const scriptData = document.getElementById('jsonld')
        if (scriptData) {
            scriptData.innerHTML = JSON.stringify(jsonLdData)
        }
    }, [jsonLdData])

    return (
        <>
            <Script
                id="jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: "{}" }}
            />
        </>
    )
}
