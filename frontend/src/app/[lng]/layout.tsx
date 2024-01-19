import './global.css';
import { dir } from 'i18next';
import React from 'react';
import { languages } from '../../lib/i18n/settings';
import { Logger } from '@/lib/log/Logger';

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
    const log = new Logger({ name: 'System' });
    log.info('initializing...!');
    log.debug(process.env.NODE_ENV);
    
    return (
        <html lang={lng} dir={dir(lng)}>
            <head />
            <body>{children}</body>
        </html>
    );
}
