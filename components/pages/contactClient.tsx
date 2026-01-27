'use client'
import {Box, IconButton, Paper, Typography} from "@mui/material";
import {Container} from "@mui/system/";
import {useTranslations} from "next-intl";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Email} from "@mui/icons-material";
import ContactForm from "@/components/contactForm";
import AnimationArea from "@/components/animationArea/animationArea";
import JsonLd from "@/components/jsonLd";

export default function ContactClient() {
    const t = useTranslations();
    const message = t.raw("contact")
    return (
        <Box sx={{minHeight: "100vh"}}>
            <JsonLd pageKey={'contact'}/>
            <Container maxWidth="lg" sx={{xs: {alignContent: "center", justifyContent: "center"}}}>
                {/*hero*/}
                <Box sx={{
                    display: {xs: 'column', md: 'flex'},
                    mt: 8, gap: 5}}>
                    <Box sx={{width: {xs: "100%", md: '50%', justifyContent: "center"},mt:10}}>
                        <Typography variant="h1" sx={{mb: 5}}>
                            {message.title}
                        </Typography>
                        <Typography variant="body1">
                            {message.text}
                        </Typography>
                        <AnimationArea/>
                    </Box>
                    <Box>
                        <ContactForm/>
                    </Box>
                </Box>
                <Paper variant={'glowCard2'} sx={{mb:10}}>
                    <Typography variant={'h2'} sx={{textAlign:"center",}}>
                        {message.availability.title}
                    </Typography>
                    <Paper variant="avaibilityCard">
                        {message.availability.text}
                    </Paper>
                    <Paper variant="avaibilityCard">
                        {message.availability.item1}
                    </Paper>
                    <Paper variant="avaibilityCard">
                        {message.availability.item2}
                    </Paper>
                    <Paper variant="avaibilityCard">
                        {message.availability.item3}
                    </Paper>
                    <Typography variant="h3" sx={{textAlign:"center", p:3}}>
                        {message.availability.description}
                    </Typography>
                </Paper>
                <Paper variant={'glowCard2'} sx={{
                    flexGrow: 1,
                    mt: 10,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around"
                }}>
                    <Paper variant={'skillCard'}
                           sx={{display: "flex", justifyContent: 'center'}}>
                        <IconButton
                            color="primary"
                            component="a"
                            href="mailto:yalcinmusa60@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px"
                            }}>
                            <Email  sx={{fontSize:{xs:56, sm:64,md:72},}}/>
                            <Typography variant={"h3"}>Email</Typography>
                        </IconButton>
                    </Paper>
                    <Paper variant={'skillCard'}
                           sx={{display: "flex", justifyContent: 'center'}}>
                        <IconButton
                            color="primary"
                            component="a"
                            href="https://www.linkedin.com/in/musa-yalcin/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px"
                            }}>
                            <LinkedInIcon sx={{fontSize:{xs:56, sm:64,md:72}, }}/>
                            <Typography variant={"h3"}>Linkedln</Typography>
                        </IconButton>
                    </Paper>
                    <Paper variant={'skillCard'}
                           sx={{display: "flex", justifyContent: 'center'}}>
                        <IconButton
                            color="primary"
                            component="a"
                            href="https://github.com/myalcin60/"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "4px"
                            }}>
                            <GitHubIcon  sx={{fontSize:{xs:56, sm:64,md:72},}}/>
                            <Typography variant={"h3"}>GitHub</Typography>
                        </IconButton>
                    </Paper>
                </Paper>
                <Box sx={{flexGrow: 1, mt: 1, mb:10}}>
                    <Typography variant="h2" sx={{textAlign:"center",
                        padding:{xs:3, md:10},
                        fontSize:32,
                        fontStyle:"italic",
                        fontWeight:"semibold",
                        fontFamily:"IBM Plex Serif",}}>
                        {message.slogan}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
