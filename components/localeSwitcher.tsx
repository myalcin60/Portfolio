'use client'
import {useTheme} from "@mui/system";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";
import {Box, FormControl, MenuItem, Select} from "@mui/material";
import "flag-icons/css/flag-icons.min.css";


export default function LocaleSwitcher(){
    const theme =useTheme();
    const locale =useLocale();
    const router = useRouter();
    const pathname = usePathname()

    function switchLocale(newLocale: string){
        if(newLocale !== locale){
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    }
    return (
        <Box sx={{display:'flex', alignItems: 'center', border:'none'}} >
            <FormControl variant="standard"  sx={{ color: {xs:theme.palette.text.primary}}}>
                <Select
                    value={locale}
                    onChange={(e) => switchLocale(e.target.value)}
                    disableUnderline
                    sx={{ color: {xs:theme.palette.text.primary}}}>
                    <MenuItem value="en" sx={{ gap:1}}>
                       EN  <span className="fi fi-gb"></span>

                    </MenuItem>
                    <MenuItem value="fr" sx={{ gap:1}}>
                        FR <span className="fi fi-fr" ></span>
                    </MenuItem>
                    <MenuItem value="tr" sx={{ gap:1}}>
                        TR <span className="fi fi-tr" ></span>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
