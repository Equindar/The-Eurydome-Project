import { useTranslation } from '@/lib/i18n';
import { fallbackLng, languages } from '@/lib/i18n/settings';
import { Logger } from '@/lib/log/Logger';

interface NavbarProps {
  params: {
    lng: string;
  };
}

export default async function Navbar({ params: { lng } }: NavbarProps) {
  const log = new Logger({ name: 'Navbar' });
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, 'admin');

  return <div>{t('admin:dashboard.navbar.title')}</div>;
}
