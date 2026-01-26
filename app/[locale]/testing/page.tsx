import {Metadata} from "next";
import {seoMetadata} from "@/utils/metaData";
import TestingClient from "@/components/pages/testingClient";

interface Params {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {locale} = await params;
    return seoMetadata(locale, 'qa')
}

export default function Project() {
    return (
        <TestingClient/>
    )
}
