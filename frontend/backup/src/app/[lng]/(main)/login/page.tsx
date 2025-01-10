import { useTranslation } from '@/lib/i18n';
import { fallbackLng, languages } from '@/lib/i18n/settings';
import { Logger } from '@/lib/log/Logger';

interface LoginProps {
  params: {
    lng: string;
  };
}

export default async function Login({ params: { lng } }: LoginProps) {
  const log = new Logger({ name: 'Login' });
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <main className="mx-auto p-4">
      <div className="grid">
        <div>{t('login.title')}</div>;
      </div>
    </main>
  );
}
