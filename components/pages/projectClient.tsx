'use client'
import {Box, Typography} from "@mui/material";
import {Container} from "@mui/system";
import {useTranslations} from "next-intl";
import ProjectCard from "@/components/projectCard";
import JsonLd from "@/components/jsonLd";
import MyProjectBtn from "@/components/button/myProjectBtn";
import GetInTouchBtn from "@/components/button/getInTouchBtn";

export default function ProjectClient() {
    const t = useTranslations()
    const message = t.raw('project')
    return (
        <Box sx={{minHeight: "100vh"}}>
            <JsonLd pageKey={'projects'}/>
            <Container maxWidth="lg">
                {/*hero*/}
                <Box sx={{
                    mt:{xs:3, sm:6, md: 8},
                    p:1}}>
                    <Typography variant={'h1'} sx={{mb: 5}}>
                        {message.title}
                    </Typography>
                    <Typography>
                        {message.text}
                    </Typography>
                </Box>
                <Box>
                    <ProjectCard/>
                </Box>
                <Box sx={{display:{xs:'block', sm:'flex'}, justifyContent:'space-around', gap:1, mt:{xs:10, md:15}}}>
                    <GetInTouchBtn/>
                </Box>
            </Container>
        </Box>
    )
}
