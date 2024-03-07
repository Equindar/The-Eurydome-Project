import TestImage from 'components/TestImage';
import AppBar from 'components/ui/AppBar';
import Footer from 'components/ui/Footer';
import ThemeSwitch from 'components/ui/ThemeSwitch';
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
    <div className="bg-gradient-to-r from-slate-100 to-slate-400 dark:from-slate-800 dark:to-slate-900">
      <AppBar lng={lng} />
      <ThemeSwitch />
      <hr />
      <TestImage />
      <hr />
      {children}
      <Footer lng={lng} />
    </div>
  );
}
