import { fallbackLng, languages } from '@/lib/i18n/settings';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/ui/card';
import { useTranslation } from 'lib/i18n';
import { Logger } from 'lib/log/Logger';
import { Trans } from 'react-i18next/TransWithoutContext';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const log = new Logger({ name: 'Application' });
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <main className="mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center space-x-4 rounded-md border p-4">
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v14 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>...</div>
      </main>
    </>
  );
}
