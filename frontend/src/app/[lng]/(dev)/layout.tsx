import AppBar from 'components/layout/AppBar';
import Footer from 'components/layout/Footer';
import { languages } from 'lib/i18n/settings';
import React from 'react';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  lng: string;
};

export default function Layout({ children, lng }: RootLayoutProps) {
  return (
    <>
      <AppBar lng={lng} />
      <div
        id="page-container"
        className="relative min-h-screen w-full bg-gradient-to-r from-cyan-200 to-blue-400
        dark:from-cyan-700 dark:to-blue-900"
      >
        <div id="content-wrap" className="px-4 py-24">
          {children}
        </div>
        <Footer lng={lng} />
      </div>
    </>
  );
}
