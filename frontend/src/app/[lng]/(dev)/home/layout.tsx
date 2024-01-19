import { dir } from 'i18next';
import React from 'react';
import { languages } from '@/lib/i18n/settings';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
    children,
    params: { lng },
}: {
    children: React.ReactNode;
    params: { lng: string };
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <head />
            <body>
                <p>Test Dev-Layout</p>
                {children}</body>
        </html>
    );
}
