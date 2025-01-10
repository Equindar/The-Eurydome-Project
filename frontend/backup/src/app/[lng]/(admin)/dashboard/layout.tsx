import Navbar from '@/components/dashboard/Navbar';
import Sidebar from '@/components/dashboard/Sidebar';
import { languages } from '@/lib/i18n/settings';
import AppBar from 'components/layout/AppBar';
import Footer from 'components/layout/Footer';
import ThemeSwitch from 'components/ui/ThemeSwitch';

interface LayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Layout({ children, params: { lng } }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-red-700 dark:from-red-800 dark:to-red-900">
      <AppBar lng={lng} />
      <ThemeSwitch />
      <div>
        <Sidebar
          params={{
            lng: '',
          }}
        />
      </div>
      <div>
        <Navbar
          params={{
            lng: '',
          }}
        />
        {children}
      </div>
      <Footer lng={lng} />
    </div>
  );
}
