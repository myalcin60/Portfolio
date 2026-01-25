import {Box, Typography} from "@mui/material";
import {Container} from "@mui/system";
import {useTranslations} from "next-intl";
import ProjectCard from "@/components/projectCard";

export default function Project(){
const t = useTranslations()
    const message =t.raw('project')
    return(
        <Box sx={{minHeight: "100vh"}}>
            <Container maxWidth="lg">
                {/*hero*/}
                <Box sx={{ mt: 10 }}>
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
                </Container>
        </Box>
    )
}