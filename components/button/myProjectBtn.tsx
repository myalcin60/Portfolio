import {Button} from "@mui/material";
import {useTranslations} from "next-intl";

export default function MyProjectBtn() {
    const message = useTranslations('home')

    return (
        <Button variant={'btn_1'} href={'/project'}>{message('hero.btn1')}</Button>
    )
}
