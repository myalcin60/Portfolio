'use client';

import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {CssBaseline, ThemeProvider} from '@mui/material';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '@/theme/theme';
import { useGlobalContext } from '@/context/globalContext';
import {ReactNode} from "react";
import Box from '@mui/material/Box';

export default function ThemeRegistry({ children }:{ children: ReactNode }) {
    const { mode } = useGlobalContext();
    const appliedTheme = mode === 'dark' ? darkTheme : lightTheme;
    const cache = React.useMemo(() => {
        const c = createCache({ key: mode === 'dark' ? 'mui-dark' : 'mui-light', prepend: true });
        c.compat = true;
        return c;
    }, [mode]);

    useServerInsertedHTML(() => (
        <style
            data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(cache.inserted).join(' '),
            }}/>
    ));
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={appliedTheme} >
                <Box sx={{background:appliedTheme.navbar.main, minHeight:'100vh'}}>
                    <CssBaseline />
                    {children}
                </Box>
            </ThemeProvider>
        </CacheProvider>
    );
}
