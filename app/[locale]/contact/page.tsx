import ContactClient from "@/components/pages/contactClient"
import {Metadata} from "next";
import {seoMetadata} from "@/utils/metaData";

interface Params {
    params: Promise<{ locale: string }>
}
export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {locale} = await params;
    return seoMetadata(locale,'contact')
}
export default function Project() {
    return (
       <ContactClient/>
    )
}
