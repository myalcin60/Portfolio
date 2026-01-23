'use client'
import {Box, IconButton, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useTheme} from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Footer() {
    const theme = useTheme()
    const message = useTranslations('footer')
    return (
        <Box sx={{
            display: {xs: 'block', md: 'flex'},
            justifyContent: 'space-around',
            alignItems: 'center',
            minHeight: 100,
            p: 5,
            borderTop: `2px solid ${theme.palette.divider}`,
            boxShadow: '0px -2px 4px rgba(0,0,0,0.1)'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 1,
                }}>
                <Link href="/" style={{textDecoration: "none", width: '100%'}}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "flex-end",
                        gap: {xs: 3, md: 1},
                        width: '100%',
                        mb: {xs: 3, md: "none"}
                    }}>
                        <Image
                            src="/my_logo.png"
                            alt="Logo"
                            width={70}
                            height={40}
                        />
                        <Typography
                            sx={{
                                fontSize: 24,
                                fontWeight: 'semibold',
                                display: 'flex',
                                alignItems: 'flex-end',
                                color: theme.navbar.text
                            }}>
                            M.YALCIN
                        </Typography>
                    </Box>
                </Link>
            </Box>
            <Box>
                <Typography sx={{color: theme.palette.text.primary,
                 textAlign: 'center'}}>
                    {message('text')}
                </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '1rem', m: 3}}>
                <IconButton
                    disableRipple
                    sx={{
                        m: 1, color: theme.navbar.icon,
                        background: "transparent !important"
                    }}
                    href="https://github.com/myalcin60"
                    target="_blank"
                    rel="noopener noreferrer">
                    <GitHubIcon/>
                </IconButton>
                <IconButton disableRipple
                            sx={{
                                m: 1, color: theme.navbar.icon,
                                background: "transparent !important"
                            }}
                            href="https://www.linkedin.com/in/musa-yalcin/"
                            target="_blank"
                            rel="noopener noreferrer">
                    <LinkedInIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}