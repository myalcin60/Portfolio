import '@mui/material/Paper';
import '@mui/material/styles';
declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        glowCard: true;
        glowCard2: true;
        skillCard: true;

    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        btn_1: true;
        btn_2: true;

    }
}
declare module '@mui/material/styles' {
    interface Theme {
        navbar: {
            bg_nav: string;
            main: string;
            icon: string;
            toggleDrawer: string;
            text: string;
        };
    }

    interface ThemeOptions {
        navbar?: {
            bg_nav?: string;
            main?: string;
            icon?: string;
            toggleDrawer?: string;
            text?: string;
        };
    }
}