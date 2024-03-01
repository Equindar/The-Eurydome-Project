import './global.css';
import ThemeProvider from 'components/ThemeProvider';
import AppBar from 'components/ui/AppBar';
import Footer from 'components/ui/Footer';
import { dir } from 'i18next';
import { fallbackLng, languages } from 'lib/i18n/settings';
import { Logger } from 'lib/log/Logger';
import { headers } from 'next/headers';
import React from 'react';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  lng: string;
};

export default function RootLayout({ children, lng }: RootLayoutProps) {
  const log = new Logger({ name: 'System' });
  log.info('initializing...!');
  if (process.env.ENV_FILE != undefined) {
    log.info(`ENV-file found: ${process.env.ENV_FILE}`);
  }
  if (process.env.LOG_LEVEL != undefined) {
    log.info(`LOG_LEVEL found: ${process.env.LOG_LEVEL}`);
  }

  return (
    <html
      lang={lng}
      dir={dir(headers().get('Accept-Language') ?? fallbackLng)}
      suppressHydrationWarning
    >
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppBar lng={lng} />
          {/* <ThemeToggle /> */}
          <hr />
          {children}
          <Footer lng={lng} />
        </ThemeProvider>
      </body>
    </html>
  );
}
