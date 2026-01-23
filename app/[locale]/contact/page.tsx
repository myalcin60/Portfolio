import {Box, Icon, IconButton, Paper, Typography} from "@mui/material";
import {Container, width} from "@mui/system";
import {useTranslations} from "next-intl";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Email} from "@mui/icons-material";
import ContactForm from "@/components/contactForm";

export default function Project() {
    const t = useTranslations();
    const message = t.raw("contact")
    return (
        <Box sx={{minHeight: "100vh"}}>
            <Container maxWidth="lg" sx={{xs: {alignContent: "center", justifyContent: "center"}}}>
                {/*hero*/}
                <Box sx={{
                    display: {xs: 'column', md: 'flex', alignItems: 'center'},
                    mt: 15, gap: 5
                }}>
                    <Box sx={{width: {xs: "100%", md: '50%', alignItems: "center", justifyContent: "center"}}}>
                        <Typography variant="h2" sx={{mb: 5}}>
                            {message.title}
                        </Typography>
                        <Typography variant="body1">
                            {message.text}
                        </Typography>
                    </Box>
                    <Box>
                        <ContactForm/>
                    </Box>

                </Box>
                <Box sx={{
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
                </Box>
            </Container>
        </Box>
    )
}