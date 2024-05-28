import { useTranslation } from '@/lib/i18n';
import { fallbackLng, languages } from '@/lib/i18n/settings';
import { Logger } from '@/lib/log/Logger';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page(props: PageProps) {
  const log = new Logger({ name: 'Application', prefix: ['DEV'] });
  var lng = props.params.lng;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, 'dev');

  return (
      <main>
        <h1>{t('dev:home.title')}</h1>
        <div>...</div>
      </main>
  );
}
