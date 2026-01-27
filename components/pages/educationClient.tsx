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
    skills:string[];
    impact: string;
    from: {title:string;
        text:string;}
    to: {title:string;
        text:string;}
}

export default function EducationClient() {
    const t = useTranslations()
    const message = t.raw('education')
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
                <Paper variant={'projectCard'} sx={{color:'black', fontStyle:'italic', fontSize:16, mt:3}}>
                    {message.text}
                </Paper>
                <Paper variant={'glowCard2'} sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: 'wrap',
                    gap: 1
                }}>
                    {message.experiences.map((items: CategoryType, index: number) => (
                        <Paper variant={'glowCard'} key={index} sx={{
                            mt: 3, textAlign: 'left',
                            maxWidth: {xs: '100%', sm: 250, md: 'auto'},
                        }}>
                            <Typography variant={'h3'} sx={{mb: 2}}>
                                {items.title}
                            </Typography>
                            <Typography variant={'body1'}>
                                {items.text}
                            </Typography>
                            <ul>
                                {items.skills.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <Typography variant={'body1'}>
                                {items.impact}
                            </Typography>
                        </Paper>
                    ))}
                </Paper>
                <Paper variant={'glowCard2'} sx={{mt: 3}}>
                    <Typography variant={'h2'} sx={{mb: 3, pb: 3, borderBottom: 1}}>
                        {message.educationShape.title}
                    </Typography>
                    <Typography variant={'body1'}>{message.educationShape.text}</Typography>
                    <Box sx={{
                        mt: 3,
                        display: "flex",
                        justifyContent: "space-around",
                        flexWrap: 'wrap',
                        gap: 1
                    }}>
                        {message.educationShape.skills.map((items: CategoryType, index: number) => (
                            <Paper variant={'skillCard'} key={index}>
                                <Typography variant={'h3'}>{items.title}</Typography>
                                <Typography variant={'body1'}>{items.text}</Typography>

                            </Paper>
                        ))}
                    </Box>
                    <Paper variant={'projectCard'} sx={{mt: 3}}>
                        <Typography sx={{color:'black', fontStyle:'italic', fontSize:16}}>{message.educationShape.quote}</Typography>
                    </Paper>
                </Paper>
                <Paper variant={'glowCard2'} sx={{mt: 3}}>
                    <Typography variant={'h2'} sx={{mb: 3, pb: 3, borderBottom: 1}}>
                        {message.teaching.title}
                    </Typography>
                    {message.teaching.items.map((item: CategoryType, index: number) => (
                    <Box key={index} sx={{mt: 3, display: "flex", flexWrap:{xs:"wrap", sm:'nowrap'}, justifyContent: "space-around", gap: 1}}>
                        <Paper variant={'glowCard'}>
                            <Typography variant={'h3'} sx={{mb: 2}}>
                                {item.from.title}
                            </Typography>
                            <Typography variant={'body1'}>
                                {item.from.text}
                            </Typography>
                        </Paper>
                        <Box sx={{display:'flex', alignItems:'center'}} > === </Box>
                        <Paper variant={'glowCard'}>
                            <Typography variant={'h3'} sx={{mb: 2}}>
                                {item.to.title}
                            </Typography>
                            <Typography variant={'body1'}>
                                {item.to.text}
                            </Typography>
                        </Paper>
                    </Box>
                    ))}
                </Paper>
                <Paper variant={'glowCard2'} sx={{mt: 3}}>
                    <Typography variant={'h2'} sx={{mb: 3, pb: 3, borderBottom: 1}}>
                        {message.knowledge.title}
                    </Typography>
                    <Typography variant={'body1'}>{message.knowledge.text}</Typography>
                    <ul>
                        {message.knowledge.skills.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <Paper variant={'projectCard'} sx={{color:'black', fontStyle:'italic', fontSize:16}}>
                        {message.knowledge.quote}
                    </Paper>
                </Paper>
                <Paper variant={'glowCard2'} sx={{mt: 3}}>
                    <Typography variant={'h2'} sx={{mb: 3, pb: 3, borderBottom: 1}}>
                        {message.cta.title}
                    </Typography>
                    <Typography variant={'body1'}>{message.cta.text}</Typography>
                    <Box sx={{display:{xs:'block', sm:'flex'}, justifyContent:'space-around', gap:1, mt:{xs:10, md:15}}}>
                       <MyProjectBtn/>
                       <GetInTouchBtn/>
                   </Box>
                </Paper>
            </Container>
        </Box>
    )
}
