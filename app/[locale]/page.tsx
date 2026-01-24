'use client'
import {Box, Button, Typography, Paper} from "@mui/material";
import {useTranslations} from "next-intl";
import JsonLd from "@/components/jsonLd";
import {useTheme} from "@mui/material/styles";
import {Container} from "@mui/system";
import AnimationArea from "@/components/animationArea/animationArea";

export default function Home() {
    const message = useTranslations('home')
    // const skills= useTranslations('skills')
    const t = useTranslations();
    const skills = t.raw("skills",);
    const theme = useTheme()
    return (
        <Box sx={{minHeight: "100vh"}}>
            <Container maxWidth="lg">
                {/*hero*/}
                <Box sx={{
                    display: {xs:"column", md:"flex"},
                    justifyContent: "space-between",
                    mt: 10
                }}>
                    <JsonLd/>
                    {/*<JsonLd pageKey={'home'}/>*/}
                    <Box >
                        <Typography sx={{
                            fontWeight: 300,
                            color: theme.palette.text.primary,
                        }}>
                            {message('hero.greeting')}
                        </Typography>
                        <Typography variant={'h1'} sx={{mt: 3}}>
                            {message('hero.name')}
                        </Typography>
                        <Typography variant={'h2'}
                                    sx={{mt: 3, mb: 3}}>
                            {message('hero.title')}</Typography>
                        <Typography sx={{color: theme.palette.text.primary,}}>
                            {message.rich("hero.text", {
                                bold: (chunks) => (
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            fontWeight: 600,
                                        }}>
                                        {chunks}
                                    </Typography>
                                ),
                            })}
                        </Typography>

                        <Box sx={{display: 'flex', gap: 2, mt: 5}}>
                            <Button variant={'btn_1'} href={'/project'}>{message('hero.btn1')}</Button>
                            <Button variant={'btn_2'} href={'/action.tsx'}>{message('hero.btn2')}</Button>
                        </Box>
                    </Box>
                    <AnimationArea/>
                </Box>
                {/*what I do*/}
                <Paper variant={'glowCard2'} sx={{mt: {xs: 5, md: 10}, mb: {xs: 5, md: 8}}}>
                    <Typography variant={'h2'}
                                sx={{borderBottom: `1px solid ${theme.palette.background.paper}`, mb: 4, pb: 2}}>
                        {message('whatIDo.title')}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyItems: 'center',
                        justifyContent: 'space-around',
                        gap: 2
                    }}>
                        <Paper variant="glowCard">
                            <Typography variant={'h3'} sx={{mt: 1, mb: 3}}>
                                {message('whatIDo.build.title')}
                            </Typography>
                            {message('whatIDo.build.description')}
                        </Paper>
                        <Paper variant="glowCard">
                            <Typography variant={'h3'} sx={{mt: 1, mb: 3}}>
                                {message('whatIDo.test.title')}
                            </Typography>


                            {message('whatIDo.test.description')}
                        </Paper>
                        <Paper variant="glowCard">
                            <Typography variant={'h3'} sx={{mt: 1, mb: 3}}>
                                {message('whatIDo.optimize.title')}
                            </Typography>


                            {message('whatIDo.optimize.description')}
                        </Paper>
                    </Box>
                </Paper>
                {/*my approach*/}
                <Paper variant={'glowCard2'} sx={{mt: 6, mb: 4}}>
                    <Typography variant={'h2'}
                                sx={{borderBottom: `1px solid ${theme.palette.background.paper}`, mb: 4, pb: 2}}>
                        {message('approach.title')}
                    </Typography>
                    <Box sx={{
                        marginBottom: 8,
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyItems: 'center',
                        justifyContent: 'space-around',
                        gap: 2
                    }}>
                        <Paper variant="glowCard">
                            <Typography variant={'h3'} sx={{
                                mt: 1, mb: 3,
                                fontSize: 48,
                            }}>
                                {message('approach.coverage.number')}
                            </Typography>
                            {message('approach.coverage.label')}
                        </Paper>
                        <Paper variant="glowCard">
                            <Typography variant={'h3'} sx={{
                                mt: 1, mb: 3,
                                fontSize: 48,
                            }}>
                                {message('approach.experience.number')}
                            </Typography>
                            {message('approach.experience.label')}
                        </Paper>
                        <Paper variant="glowCard">
                            <Typography variant={'h3'} sx={{
                                mt: 1, mb: 3,
                                fontSize: 56,
                            }}>
                                {message('approach.problems.number')}
                            </Typography>
                            {message('approach.problems.label')}
                        </Paper>
                    </Box>
                    <Typography sx={{width: {sm: '100%', md: '60%'}}}>
                        {message('approach.description')}
                    </Typography>

                </Paper>
                {/* tecnical skills */}
                <Box sx={{mt: 6, mb: 4}}>
                    <Typography variant={'h2'}
                                sx={{borderBottom: `1px solid ${theme.palette.background.paper}`, mb: 4, pb: 2}}>
                        {skills.title}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyItems: 'center',
                        justifyContent: 'space-around',
                        gap: 2
                    }}>
                        <Paper variant="skillCard">
                            <Typography variant={'h3'}>
                                {skills.frontend}
                            </Typography>
                            {skills.fr_skills.map((skill: string, index: string) => (
                                <li key={index}>{skill} </li>
                            ))}
                        </Paper>
                        <Paper variant="skillCard">
                            <Typography variant={'h3'}>
                                {skills.backend}
                            </Typography>
                            {skills.bc_skills.map((skill: string, index: string) => (
                                <li key={index}>{skill} </li>
                            ))}
                        </Paper>
                        <Paper variant="skillCard">
                            <Typography variant={'h3'}>
                                {skills.database}
                            </Typography>
                            {skills.db_skills.map((skill: string, index: string) => (
                                <li key={index}>{skill} </li>
                            ))}
                        </Paper>
                        <Paper variant="skillCard">
                            <Typography variant={'h3'}>
                                {skills.testing}
                            </Typography>
                            {skills.test_skills.map((skill: string, index: string) => (
                                <li key={index}>{skill} </li>
                            ))}
                        </Paper>
                        <Paper variant="skillCard">
                            <Typography variant={'h3'}>
                                {skills.methodology}
                            </Typography>
                            {skills.m_skills.map((skill: string, index: string) => (
                                <li key={index}>{skill} </li>
                            ))}
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{mt: 6, mb: 4}}>
                    <Typography variant={'h2'}
                                sx={{borderBottom: `1px solid ${theme.palette.background.paper}`, mb: 4, pb: 2}}>
                        {message('contact.title')}
                    </Typography>
                    <Typography variant={'body1'} sx={{textAlign: 'center'}}>
                        {message('contact.description')}
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-around', gap: 2, mt: 5}}>
                        <Button variant={'btn_1'} href={'/project'}>{message('hero.btn1')}</Button>
                        <Button variant={'btn_2'} href={'/action.tsx'}>{message('hero.btn2')}</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
