'use client';
import {useTranslations} from "next-intl";
import JsonLd from "@/components/jsonLd";
import {Box, Paper, Typography} from "@mui/material";
import {Container} from "@mui/system";
import MyProjectBtn from "@/components/button/myProjectBtn";
import GetInTouchBtn from "@/components/button/getInTouchBtn";

interface Props {
    item: string[];
    items: string[];
    title?: string;
    description?: string;
    additional?:string;
    quote?:string;
}

export default function AboutClient() {
    const t = useTranslations()
    const message = t.raw('about')
    return (
        <Box sx={{minHeight: "100vh"}}>
            <JsonLd pageKey={'about'}/>
            <Container maxWidth="lg">
                {/*hero*/}
                <Box sx={{
                    mt:{xs:3, sm:6, md: 8},
                    p:1}}>
                    <Typography variant={'h1'} sx={{mb:3}}> {message.title}</Typography>
                    <Typography variant={'body1'}>{message.text}</Typography>
                </Box>
                <Paper variant={'glowCard2'}>
                    <Typography variant={'h2'} sx={{mb:3}}> {message.mindset.title}</Typography>
                    <Typography variant={'body1'}>{message.mindset.text}</Typography>
                    <ul>
                        {message.mindset.items.map((item:string, i:number) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <Box sx={{mt: 1, display:'flex', flexWrap: 'wrap', justifyContent:'space-around', gap: '1rem'}}>
                        {message.mindset.impacts.map((item:Props, i:number) => (
                            <Paper variant={'glowCard'} key={i} sx={{textAlign:'left'}}>
                                <Typography variant={'h3'} sx={{mb:1}}>{item.title}</Typography>
                                <Typography variant={'body1'}>{item.description}</Typography>
                            </Paper>
                        ))}
                    </Box>
                </Paper>
                {message.sections.map((item:Props, i:number) => (
                    <Paper variant={'glowCard2'} key={i}>
                        <Typography variant={'h2'} sx={{mb:3}}> {item.title}</Typography>
                        <Typography variant={'body1'}>{item.description}</Typography>
                        <ul>
                            {item.items.map((item:string, i:number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <Typography>{item.additional}</Typography>
                        <Paper variant={'projectCard'} sx={{fontStyle:'italic', fontSize:20, mt:3}}>
                            {item.quote}
                        </Paper>
                    </Paper>
                ))}
                <Paper variant={'glowCard2'} sx={{textAlign:'center'}}>
                    <Typography variant={'h2'} sx={{mb:1}}>{message.cta.title}</Typography>
                    <Typography variant={'body1'}>{message.cta.description}</Typography>
                    <Box sx={{display:{xs:'block', sm:'flex'}, justifyContent:'space-around', gap:1, mt:{xs:10, md:15}}}>
                        <MyProjectBtn/>
                        <GetInTouchBtn/>
                    </Box>
                </Paper>

            </Container>
        </Box>
    )
}
