import AppBar from 'components/layout/AppBar';
import Footer from 'components/layout/Footer';
import TestImage from 'components/TestImage';
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
    <div
      className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-400
    dark:from-cyan-700 dark:to-blue-900"
    >
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
