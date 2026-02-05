'use client'
import {Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useTheme} from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Footer() {
    const theme = useTheme()
    const message = useTranslations('footer')
    const t = useTranslations('navbar')
    const pages = [
        {label: t('home'), href: "/"},
        {label: t('project'), href: "/project"},
        {label: t('test'), href: "/testing"},
        {label: t('education'), href: "/education"},
        {label: t('about'), href: "/about"},
        {label: t('contact'), href: "/contact"},
    ]
    return (
        <Box sx={{
            mt: 10,
            display: {xs: 'block', sm: 'flex'},
            justifyContent: 'space-around',
            alignItems: 'center',
            minHeight: 100,
            p: 5,
            borderTop: `2px solid ${theme.palette.divider}`,
            boxShadow: '0px -2px 4px rgba(0,0,0,0.1)'
        }}>
            <Box>
            <Box sx={{}}>
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
            </Box>
            <Typography sx={{
                color: theme.palette.text.primary,
                textAlign: 'center' }}
            >
            {message('text')}
            </Typography>
            <List>
                {pages.map((item) => (
                    <ListItem key={item.href} disablePadding>
                        <ListItemButton
                            component={Link}
                            href={item.href}
                            sx={{
                                py: 0.1,
                                minHeight: 24
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    fontSize: "0.5rem",
                                    lineHeight: 0.5
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
