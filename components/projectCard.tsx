'use client'

import {Box, Link, Paper, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useTheme} from "@mui/material/styles";
import {CustomColors} from "@/theme/theme";
import Image from "next/image";

export default function ProjectCard(){
    const theme = useTheme();
    const t = useTranslations()
    const message =t.raw('project.projects')
    return (
        <>
            {message.map((p, index:number)=>(
                <Paper key={index} variant={'glowCard2'} >
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

                    <Box sx={{display:{xs:'block', sm:'flex'}, gap:5 ,m:2}}>
                        <Box sx={{maxWidth:600}}>
                            <Typography variant={'h3'}>
                                {p.titleDes}
                            </Typography>
                            <Typography variant={'body1'} >
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
                        <Box sx={{}}>
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
                    </Box>
                    <Box  sx={{m:{xs:1, sm:3, md:5}}}>
                        <Link href={p.link} target={'_blank'} style={{textDecoration: "none", width: '100%'}}>
                        <Image
                            src={p.image}
                            alt={p.title} width={600}  height={400}
                            style={{
                                width: '100%',height:"auto",
                                borderRadius: 8,
                                transition: "transform 0.3s ease, filter 0.3s ease"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.filter = "brightness(1.1)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.filter = "brightness(1)";
                            }}

                        />
                        </Link>
                    </Box>


                </Paper>
            ))}

        </>
    )
}
