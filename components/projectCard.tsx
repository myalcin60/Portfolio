'use client'

import {Box, Paper, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useTheme} from "@mui/material/styles";
import {CustomColors} from "@/theme/theme";

export default function ProjectCard(){
    const theme = useTheme();
    const t = useTranslations()
    const message =t.raw('project.projects')
    return (
        <>
            {message.map((p, index:number)=>(
                <Paper key={index} variant={'glowCard2'}>
                    <Box sx={{borderBottom :1, pb:3}} >
                        <Typography variant={'h2'}>
                            {p.title}
                        </Typography>
                        <Typography sx={{fontSize:16}}>
                            {p.item1}
                        </Typography>
                        <Typography variant={"body1"} sx={{color:CustomColors.green}}>
                            {p.status}
                        </Typography>
                    </Box>
                    <Box sx={{mt:4}}>
                        <Typography variant={'h3'}>
                            {p.titleDes}
                        </Typography>
                        <Typography variant={'body1'}>
                            {p.description}
                        </Typography>
                        <Typography variant={'h3'}>
                            {p.key}
                        </Typography>
                        <ul>
                            {p.keyFuture.map((keyFuture:string, index:number)=>(
                                <li key={index}>
                                    {keyFuture}
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box sx={{mt:4}}>
                        <Typography variant={'h3'}>
                            {p.tech}
                        </Typography>
                        <Box sx={{display:'flex',
                            flexWrap: 'wrap',
                            gap:2,
                        mt:3}}>
                            {p.techStack.map((techStack:string, index:number)=>(
                                <Box key={index} sx={{backgroundColor:theme.palette.secondary.main,
                                borderRadius:2,
                                p:1,
                                minWidth:100,
                                textAlign:'center',}}>
                                    {techStack}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Paper variant={'projectCard'} sx={{mt:4}}>
                        <Typography variant={'h3'}>
                            {p.deployment}
                        </Typography>
                        <Typography>
                            {p.platform}
                        </Typography>
                    </Paper>
                </Paper>
            ))}

        </>
    )
}
