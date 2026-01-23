'use client'

import {Button, Box, Paper, TextField, Typography} from "@mui/material";
import {useTranslations} from "next-intl";
import {useActionState} from "react";
import {sendContactForm} from "../app/action";

export default function ContactForm() {
    const t = useTranslations();
    const message = t.raw("contact.form");

    const [state, formAction, isPending] = useActionState(sendContactForm, {
        success: false,
        errors: {}
    });

    return (
        <Paper variant="glowCard2">
            <Typography variant="h2" sx={{ mb: 3 }}>
                {message.title}
            </Typography>

            <form action={formAction}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        name="name"
                        label={message.name}
                        placeholder="Anne Martin"
                        error={!!state.errors?.name}
                        helperText={state.errors?.name?.[0]}
                    />

                    <TextField
                        name="email"
                        label={message.email}
                        placeholder="email@example.com"
                        error={!!state.errors?.email}
                        helperText={state.errors?.email?.[0]}
                    />

                    <TextField
                        name="subject"
                        label={message.subject}
                        error={!!state.errors?.subject}
                        helperText={state.errors?.subject?.[0]}
                    />

                    <TextField
                        name="message"
                        label={message.message}
                        multiline
                        rows={3}
                        error={!!state.errors?.message}
                        helperText={state.errors?.message?.[0]}
                    />

                    <Button
                        type="submit"
                        variant="btn_1"
                        disabled={isPending}
                        sx={{ height: 50, width: "100%" }}
                    >
                        {isPending ? message.sending : message.send}
                    </Button>

                    {state.success && (
                        <Typography color="success.main" variant="body2">
                            {message.success ?? "Mesajın başarıyla gönderildi."}
                        </Typography>
                    )}

                    {state.errors?.global && (
                        <Typography color="error.main" variant="body2">
                            {state.errors.global[0]}
                        </Typography>
                    )}
                </Box>
            </form>
        </Paper>
    );
}