import { createTheme } from "@mui/material/styles";
import {IBM_Plex_Sans, IM_Fell_French_Canon} from 'next/font/google';
import {maxWidth, palette} from "@mui/system";

const ibmPlexSans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-ibm-plex-sans',
});

const imFellFrenchCanon = IM_Fell_French_Canon({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-im-fell-french-canon',
});
export const CustomColors={
    bg_main:"#031927",
    bg_secondary:"#0C5A8D",
    bg_light:"#dce5fa",
    bg_light_secondary:"#9CB4F6",
    orange_dark:"#EEA913",
    orange_light:"#F4C45D",
    text_white:"#FFFFFF",
    text_dark:"#000000",
    text_red:"#AA3220",
    green:"#0A8023",
    purple:"#7a3f83",


}

export const lightTheme = createTheme({
    navbar: {
        bg_nav:CustomColors.bg_light_secondary,
        main: CustomColors.bg_light,
        icon: CustomColors.bg_main,
        toggleDrawer: CustomColors.bg_light,
        text:CustomColors.text_red
    },
    palette: {
        mode: "light",
        primary: {
            main: CustomColors.text_dark,
        },
        secondary: {
            main: CustomColors.purple,
        },
        background: {
            default:CustomColors.bg_light,
            paper: CustomColors.bg_secondary,
        },
        text: {
            primary: CustomColors.bg_main,
            secondary: CustomColors.text_red,
        },

    },
    typography: {
        fontFamily: `var(${ibmPlexSans.style.fontFamily}), sans-serif`,
        h1: {
            color:CustomColors.bg_main,
            fontFamily: `var(${imFellFrenchCanon.style.fontFamily}), Roboto, serif`,
            fontWeight: 400,
            fontSize: 84,
            lineHeight: 1.2,
            '@media (max-width:600px)': {fontSize: '36px'},
        },
        h2: {
            color:CustomColors.bg_main,
            fontFamily: `var(${imFellFrenchCanon.style.fontFamily}), serif`,
            fontWeight: 400,
            fontSize: 44,
            lineHeight: 1.25,
            '@media (max-width:600px)': {fontSize: '26px'},
        },
        h3: {color:CustomColors.orange_dark,
            fontFamily: `var(${imFellFrenchCanon.style.fontFamily}), serif`,
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 1.3,
            '@media (max-width:600px)': {fontSize: '22px'},
        },
        body1: {
            color:CustomColors.bg_main,
            fontFamily: `var(${ibmPlexSans.style.fontFamily}), sans-serif`,
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.5,
            '@media (max-width:600px)': {fontSize: '16px'},
        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: { variant: 'btn_1' },
                    style: {
                        fontWeight:'semibold',
                        fontSize:18,
                        color:CustomColors.text_white,
                        height:56,
                        width:250,
                        border:`1px solid ${CustomColors.orange_light}`,
                        background:CustomColors.purple
                    }
                },
                {
                    props:{variant: 'btn_2'},
                    style:{
                        fontWeight:'semibold',
                        fontSize:18,
                        color:CustomColors.bg_main,
                        height:56,
                        width:250,
                        border:`1px solid ${CustomColors.bg_main}`,
                        background:CustomColors.bg_light
                    }
                }
            ]
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'glowCard' },
                    style: {
                        background:CustomColors.purple,
                        textAlign:"center",
                        color:CustomColors.text_white,
                        marginTop:30,
                        maxWidth:350,
                        minWidth:300,
                        minHeight:150,
                        padding: 16,
                        border:`1px solid ${CustomColors.bg_light}`,
                        borderRadius: 12,
                        cursor: 'pointer',
                        transition: '0.3s',
                        '&:hover': {
                            border:CustomColors.orange_light,
                            boxShadow: `
                                inset 1px 1px 1px  ${CustomColors.orange_dark} ,
                                inset 1px 1px 1px  ${CustomColors.orange_dark} ,
                                1px 1px 1px ${CustomColors.orange_dark}
                                `,
                        },
                        '@media(min-width:500)':{

                        }
                    },
                },
                {
                    props: {variant: 'glowCard2'},
                    style: {
                        marginTop:100,
                        background: `linear-gradient(0deg, ${CustomColors.bg_light} 0%, ${CustomColors.bg_light_secondary} 100%)`,
                        padding: 32,
                        borderRadius:"12px ",
                        border: `1px solid ${CustomColors.bg_light_secondary} 0 0 0`,
                        borderBottom: "none",
                        boxShadow: `
                                inset 0px 1px 0px  ${CustomColors.bg_main} ,                            
                                0 0 2px ${CustomColors.bg_secondary}
                                `,
                    }
                },
                {
                    props: { variant: 'skillCard' },
                    style: {
                        background: CustomColors.purple,
                        marginTop:30,
                        color:CustomColors.text_white,
                        maxWidth:350,
                        minWidth: 220,
                        minHeight:150,
                        padding: 32,
                        border:`0px solid ${CustomColors.bg_secondary}`,
                        borderRadius: 12,
                        cursor: 'pointer',
                        transition: '0.3s',
                        boxShadow: `
                                inset 0px 4px 0px  ${CustomColors.orange_dark}`,
                        '@media(max-width:500px)':{
                            minWidth:180,
                            padding:24
                        }
                    },
                },
            ],
        },
    },
});

export const darkTheme = createTheme({
    navbar: {
        bg_nav:`linear-gradient(180deg, ${CustomColors.bg_main} 0%, ${CustomColors.bg_secondary} 100%)`,
        main: `linear-gradient(180deg, ${CustomColors.bg_main} 70%, ${CustomColors.bg_secondary} 100%)`,
        icon: "#F4C45D",
        toggleDrawer: CustomColors.bg_light,
        text:CustomColors.orange_light
    },
    palette: {
        mode: "dark",
        primary: {
            main: CustomColors.text_white,
        },
        secondary: {
            main: CustomColors.bg_secondary,
        },
        background: {
            default: CustomColors.bg_main,
            paper: CustomColors.bg_secondary,

        },
        text: {
            primary: CustomColors.text_white,
            secondary: CustomColors.orange_light,
        }
    },
    typography: {
        fontFamily: `var(${ibmPlexSans.style.fontFamily}), sans-serif`,
        h1: {
            fontFamily: `var(${imFellFrenchCanon.style.fontFamily}), Roboto, serif`,
            fontWeight: 400,
            fontSize: 84,
            lineHeight: 1.2,
            '@media (max-width:600px)': {fontSize: '36px'},
        },
        h2: {
            color:CustomColors.orange_light,
            fontFamily: `var(${imFellFrenchCanon.style.fontFamily}), serif`,
            fontWeight: 400,
            fontSize: 44,
            lineHeight: 1.25,
            '@media (max-width:600px)': {fontSize: '26px'},
        },
        h3: {
            color:CustomColors.orange_light,
            fontFamily: `var(${imFellFrenchCanon.style.fontFamily}), serif`,
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 1.3,
            '@media (max-width:600px)': {fontSize: '22px'},
        },
        body1: {
            color:CustomColors.text_white,
            fontFamily: `var(${ibmPlexSans.style.fontFamily}), sans-serif`,
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.5,
            '@media (max-width:600px)': {fontSize: '16px'},
        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: 'none',
                },
            },
            variants: [
                {
                    props: { variant: 'btn_1' },
                    style: {
                        fontWeight:'bold',
                        fontSize:18,
                        color:CustomColors.orange_light,
                        height:56,
                        width:250,
                        border:`1px solid ${CustomColors.bg_light}`,
                        background:CustomColors.bg_secondary
                    }
                },
                {
                    props:{variant: 'btn_2'},
                    style:{
                        fontWeight:'bold',
                        fontSize:18,
                        color:CustomColors.bg_main,
                        height:56,
                        width:250,
                        border:`1px solid ${CustomColors.orange_light}`,
                        background:CustomColors.bg_light
                    }
                }
            ]
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'glowCard' },
                    style: {
                        textAlign:"center",
                        marginTop:30,
                        color:CustomColors.text_white,
                        maxWidth:350,
                        minWidth:300,
                        minHeight:150,
                        padding: 16,
                        border:`1px solid ${CustomColors.bg_secondary}`,
                        borderRadius: 12,
                        cursor: 'pointer',
                        transition: '0.3s',
                        '&:hover': {
                            border:CustomColors.orange_light,
                            boxShadow: `
                                inset 1px 1px 1px  ${CustomColors.orange_light} ,
                                inset 1px 1px 1px  ${CustomColors.orange_light} ,
                                1px 1px 1px ${CustomColors.orange_light}
                                `,
                        },
                    },
                },
                {
                    props: {variant: 'glowCard2'},
                    style: {
                        marginTop:100,
                        background: `linear-gradient(180deg, ${CustomColors.bg_main} 0%, ${CustomColors.bg_secondary} 100%)`,
                        padding: 32,
                        borderRadius:"12px ",
                        border: `0px solid ${CustomColors.bg_light} 0 0 0`,
                        borderBottom: "none",
                        boxShadow: `
                                inset 0px 1px 0px  ${CustomColors.bg_secondary} ,                            
                                0 0 2px ${CustomColors.bg_secondary}
                                `,
                    }
                },
                {
                    props: { variant: 'skillCard' },
                    style: {
                        marginTop:30,
                        color:CustomColors.text_white,
                        maxWidth:350,
                        minWidth: 220,
                        minHeight:150,
                        padding: 32,
                        border:`0px solid ${CustomColors.bg_secondary}`,
                        borderRadius: 12,
                        cursor: 'pointer',
                        transition: '0.3s',
                        boxShadow: `
                                inset 0px 4px 0px  ${CustomColors.orange_light}`,
                        '@media(max-width:500px)':{
                            minWidth:180,
                            padding:24
                        }

                    },
                },
            ],
        },
    },
});
