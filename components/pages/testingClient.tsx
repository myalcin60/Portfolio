'use client'
import {Box, Paper, Typography} from "@mui/material";
import {Container} from "@mui/system";
import {useTranslations} from "next-intl";
import JsonLd from "@/components/jsonLd";
import MyProjectBtn from "@/components/button/myProjectBtn";
import GetInTouchBtn from "@/components/button/getInTouchBtn";

interface CategoryType {
    title: string;
    items: string[];
    text: string;
    goal: string;
}
export default function TestingClient() {
    const t = useTranslations()
    const message = t.raw('testing')
    return (
        <Box sx={{minHeight: "100vh"}}>
            <JsonLd pageKey={'qa'}/>
            <Container maxWidth="lg">
                {/*hero*/}
                <Box sx={{
                    mt:{xs:3, sm:6, md: 8},
                    p:1}}>
                    <Typography variant="h1" sx={{mb: 3}}>
                        {message.title}
                    </Typography>
                    <Typography variant="body1">
                        {message.description}
                    </Typography>
                </Box>
                <Paper variant={'glowCard2'}>
                    <Typography variant="h2" sx={{mb: 3, pb:3, borderBottom: 1 }}>
                        {message.titleQa}
                    </Typography>
                    <Typography variant="body1">
                        {message.text}
                    </Typography>
                    <ul>
                    {message.points.map((point:string, i:number) => (
                        <li key={i}> {point}  </li>
                    ))}
                    </ul>
                    <Paper variant="projectCard">
                        {message.additional}
                    </Paper>
                </Paper>
                <Paper variant={'glowCard2'}>
                    <Typography variant="h2" sx={{mb:3, pb:3, borderBottom:1}}>
                        {message.titleTypes}
                    </Typography>
                    <Box sx={{display:'flex',
                    justifyContent: 'space-around',
                        flexWrap: 'wrap', gap: '1rem'}}>
                        {message.categorieType.map((category:CategoryType, i:number) => (
                            <Paper variant={'glowCard'} key={i} sx={{
                                textAlign:'left',
                                minWidth:{xs:'100%', sm:425},
                            }}>
                                <Typography variant="h3" sx={{mb: 2}}>
                                    {category.title}
                                </Typography>
                                <ul>
                                    {category.items.map((item:string, i:number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </Paper>
                        ))}
                    </Box>
                </Paper>
                <Paper variant={'glowCard2'}>
                    <Typography variant="h2" sx={{mb: 3, pb:3, borderBottom:1}}>
                        {message.titleTool}
                    </Typography>
                    <Box sx={{display:'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap', gap: '1rem'}}>
                        {message.categorieTool.map((category:CategoryType, i:number) => (
                            <Paper variant={'glowCard'} key={i} sx={{
                                textAlign:'left',
                                minWidth:{xs:'100%', sm:425} }}>
                                <Typography variant="h3" sx={{mb: 2}}>
                                    {category.title}
                                </Typography>
                                <ul>
                                    {category.items.map((item:string, i:number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </Paper>
                        ))}
                    </Box>
                </Paper>
                {
                    message.content.map((items:CategoryType, i:number) => (
                        <Paper variant={'glowCard2'} key={i}>
                            <Typography variant="h2" sx={{mb:3, pb:3 , borderBottom:1}}>
                                {items.title}
                            </Typography>
                            <Typography variant={'body1'}>
                                {items.text}
                            </Typography>
                            <ul>
                                {items.items.map((item:string, i:number) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <Paper variant={'projectCard'}>
                                {items.goal}
                            </Paper>
                        </Paper>
                    ))
                }
                <Box sx={{display:{xs:'block', sm:'flex'}, justifyContent:'space-around', gap:1, mt:{xs:10, md:15}}}>
                    <MyProjectBtn/>
                    <GetInTouchBtn/>
                </Box>
            </Container>
        </Box>
    )
}
