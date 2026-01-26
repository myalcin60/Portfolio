import {Metadata} from "next";
import {seoMetadata} from "@/utils/metaData";
import EducationClient from "@/components/pages/educationClient";

interface Params {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {locale} = await params;
    return seoMetadata(locale, 'education')
}

export default function Project() {
    return (
        <EducationClient/>
    )
}
