'use client'

import {Button, Box, Paper, TextField, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useActionState} from "react";
import {sendContactForm} from "@/app/(actions)/contact";

export default function ContactForm() {
    const contact = useTranslations();
    const message = contact.raw("contact.form");
    const t = useTranslations("contact.form");
    const [state, formAction, isPending] = useActionState(sendContactForm, {
        success: false,
        errors: {}
    });
    return (
        <Paper variant="glowCard2" sx={{minWidth: 500, gap:5}}>
            <Typography variant="h2" sx={{ mb: 3 }}>
                {message.title}
            </Typography>
            <form action={formAction} >
                <Box display="flex" flexDirection="column" gap={2}>
                    {/* Honeypot (bot tuzağı) */}
                    <input
                        type="text"
                        name="website"
                        autoComplete="off"
                        style={{ display: "none"
                    }} />
                    <TextField
                        name="name"
                        label={message.name}
                        placeholder="Anne Martin"
                        error={!!state.errors?.name}
                        helperText={state.errors?.name?.[0]}  />
                    <TextField
                        name="email"
                        label={message.email}
                        placeholder="email@example.com"
                        error={!!state.errors?.email}
                        helperText={state.errors?.email?.[0]}  />
                    <TextField
                        name="subject"
                        label={message.subject}
                        error={!!state.errors?.subject}
                        helperText={state.errors?.subject?.[0]}  />
                    <TextField
                        name="message"
                        label={message.message}
                        multiline
                        rows={3}
                        error={!!state.errors?.message}
                        helperText={state.errors?.message?.[0]} />
                    <Button
                        type="submit"
                        variant="btn_1"
                        disabled={isPending}
                        sx={{ height: 50, width: "100%" }}>
                        {isPending ? message.sending : message.send}
                    </Button>
                    {state.success && state.message && (
                        <Typography color="success.main" variant="body2">
                            {t(state.message)}
                        </Typography>
                    )}
                    {state.errors?.global?.map((err, i) => (
                        <Typography key={i} color="error.main" variant="body2">
                            {t(err)}
                        </Typography>
                    ))}
                </Box>
            </form>
        </Paper>
    );
}
