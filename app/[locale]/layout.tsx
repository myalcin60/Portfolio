import type { Metadata } from "next";
import {GlobalProvider} from "@/context/globalContext";
import Navbar from "@/components/navbar";
import ThemeRegistry from "@/components/theme/themeRegistry";
import {routing} from "@/i18n/routing";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {notFound} from "next/dist/client/components/not-found";
import {setRequestLocale} from "next-intl/server";
import Footer from "@/components/footer";
import React from "react";

export const metadata: Metadata = {
    title: {
        default: "Musa YALCIN | Full-Stack Web & Mobile Developer",
        template: "%s | Musa YALCIN",
    },
    description:
        "Full-stack developer building modern web and mobile applications with Next.js, React, Node.js, PHP, and Java."
};
export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}
export default async function RootLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
      <GlobalProvider>
        <ThemeRegistry>
           <NextIntlClientProvider>
            <Navbar/>
             {children}
               <Footer/>
           </NextIntlClientProvider>
        </ThemeRegistry>
      </GlobalProvider>
      </body>
    </html>
  );
}
