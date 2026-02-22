import {Metadata} from 'next';
import HomeClient from "@/components/pages/homeClient"
import {seoMetadata} from "@/utils/metaData";

interface Params {
    params: Promise<{ locale: string }>
}
export async function generateMetadata({params}: Params): Promise<Metadata> {
    const {locale} = await params;
    return seoMetadata(locale,'home')
}
export default function Home() {
    return (
        <>
            <HomeClient/>
        </>
    );
}
