import Navbar from '@/app/components/dashboard/Navbar';
import Sidebar from '@/app/components/dashboard/Sidebar';
import { languages } from '@/lib/i18n/settings';

interface LayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Layout({ children, params: { lng } }: LayoutProps) {
  return (
    <div>
      Layout (Admin Dashboard)
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
    </div>
  );
}
