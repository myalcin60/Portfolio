import {useTranslations} from "next-intl";
import {Button} from "@mui/material";

export default function GetInTouchBtn(){
   const message = useTranslations('home')
    return(
        <Button variant={'btn_2'} href={'/contact'} sx={{mb:1}}>{message('hero.btn2')}</Button>
    )
}
