'use client'
import ThemeButton from "@/components/theme/themeButton";
import {
    Box,
    AppBar,
    Typography,
    IconButton,
    Toolbar,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton
} from '@mui/material'
import Image from "next/image";
import LocaleSwitcher from "@/components/localeSwitcher";
import {useTheme} from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Container} from "@mui/system";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
    const theme = useTheme();
    const message = useTranslations('navbar')

    const pages=[
        {label: message('home'), href:"/"},
        {label: message('project'), href:"/project"},
        {label: message('test'), href:"/testing"},
        {label: message('education'), href:"/education"},
        {label: message('about'), href:"/about"},
        {label: message('contact'), href:"/contact"},
    ]
    return (
        <>
        <AppBar position="static" elevation={1} sx={{
            minHeight: '10vh',
            width: '100%',
            background: theme.navbar.bg_nav,
            borderBottom: `2px solid ${theme.navbar.icon}`,
            color: theme.navbar.text
        }}>
            <Toolbar>
                <Container maxWidth={false} sx={{
                    maxWidth: 1440,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <Box sx={{
                        mt: 3,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        width: '100%'
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                gap: 1,
                            }}>
                            <Link href="/" style={{ textDecoration: "none" }}>
                                <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1 }}>
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
                                        }} >
                                        M.YALCIN
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                        <IconButton sx={{
                            color: theme.palette.primary.main,
                            display: {md: 'none'}
                        }} color="inherit" onClick={toggleDrawer}>
                            <MenuIcon/>
                        </IconButton>
                        <Box sx={{ display: {xs:'none', md:'flex'}, alignItems: 'flex-end', gap: 1}}>
                            <Box sx={{mr:1}}>
                                {pages.map((page) => (
                                    <Button key={page.href} component={Link} href={page.href}
                                    sx={{color:theme.navbar.text,  alignItems:'flex-end', fontSize:18}}>
                                        {page.label}
                                    </Button>))}
                            </Box>
                            <Box sx={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                <Box>
                                    <LocaleSwitcher/>
                                </Box>
                                <Box>
                                    <ThemeButton/>
                                </Box>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                <IconButton
                                    disableRipple
                                    sx={{
                                        color: theme.navbar.icon,
                                        background: "transparent !important"
                                    }}
                                    href="https://github.com/myalcin60"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <GitHubIcon/>
                                </IconButton>
                                <IconButton disableRipple
                                            sx={{
                                                color: theme.navbar.icon,
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
                </Container>
            </Toolbar>
        </AppBar>
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{
            width: 250
        }} role="presentation">
            <Box sx={{
                px: 4,
                mt: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                gap: 1
            }}>
                <Box sx={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <Box>
                        <LocaleSwitcher/>
                    </Box>
                    <Box>
                        <ThemeButton/>
                    </Box>
                </Box>
            </Box>
            <List >
                {pages.map((item) => (
                    <ListItem key={item.href} disablePadding>
                        <ListItemButton component={Link} href={item.href} onClick={toggleDrawer}>
                            <ListItemText primary={item.label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
        </>
    );
}
