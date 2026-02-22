import {Metadata} from "next";
import {seoMetadata} from "@/utils/metaData";
import ProjectClient from "@/components/pages/projectClient";

interface Params {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {locale} = await params;
    return seoMetadata(locale, 'projects')
}

export default function Project() {
    return (
       <ProjectClient/>
    )
}
