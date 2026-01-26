import AboutClient from "@/components/pages/aboutClient";
import {Metadata} from "next";
import {seoMetadata} from "@/utils/metaData";

interface Params {
    params: Promise<{ locale: string }>
}
export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {locale} = await params;
    return seoMetadata(locale,'about')
}

export default function About(){
    return(
        <AboutClient/>
    )
}
