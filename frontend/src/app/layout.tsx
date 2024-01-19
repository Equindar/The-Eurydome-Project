import './global.css';
import { Logger } from '@/lib/log/Logger';
import { dir } from 'i18next';
import React from 'react';
import { languages } from '../lib/i18n/settings';
import { LanguageSelect } from './ui/language/LanguageSelect';

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
    if (process.env.ENV_FILE != undefined) {
        log.info(`ENV-file found: ${process.env.ENV_FILE}`);
    }
    if (process.env.LOG_LEVEL != undefined) {
        log.info(`LOG_LEVEL found: ${process.env.LOG_LEVEL}`);
    }

    return (
        <html lang={lng} dir={dir(lng)}>
            <head />
            <body>
                <LanguageSelect />
                <hr />
                {children}
            </body>
        </html>
    );
}
