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
        className="relative min-h-screen w-full bg-gradient-to-r from-slate-100 to-slate-400 dark:from-slate-800 dark:to-slate-900"
      >
        <div id="content-wrap" className="pb-60">
          {children}
        </div>
        <Footer lng={lng} />
      </div>
    </>
  );
}
