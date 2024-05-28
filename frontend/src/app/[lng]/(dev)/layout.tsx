import AppBar from 'components/layout/AppBar';
import Footer from 'components/layout/Footer';
import { languages } from 'lib/i18n/settings';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Layout({ children, params: { lng } }: RootLayoutProps) {
  return (
    <>
      <AppBar lng={lng} />
      <div
        id="page-container"
        className="relative min-h-screen w-full bg-gradient-to-r from-cyan-200 to-blue-400
        dark:from-cyan-700 dark:to-blue-900"
      >
        <div
          id="content-wrap"
          className="min-h-full bg-[url('/assets/dotted-background.svg')] px-4 py-24"
        >
          {children}
        </div>
        <Footer lng={lng} />
      </div>
    </>
  );
}
