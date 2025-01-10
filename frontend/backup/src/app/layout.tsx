import './global.css';
import ThemeProvider from 'components/ThemeProvider';
import { dir } from 'i18next';
import { fallbackLng, languages } from 'lib/i18n/settings';
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
  return (
    <html
      lang={lng}
      dir={dir(headers().get('Accept-Language') ?? fallbackLng)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
