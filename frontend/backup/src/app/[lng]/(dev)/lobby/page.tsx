import { fallbackLng, languages } from '@/lib/i18n/settings';
import GroupList from 'components/lobby/GroupList';
import { Button } from 'components/ui/Button';
import { useTranslation } from 'lib/i18n';
import { Logger } from 'lib/log/Logger';
import Image from 'next/image';

interface PageProps {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: PageProps) {
  const log = new Logger({ name: 'Application' });
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, 'main');

  return (
    <main className="mx-auto max-w-screen-xl pt-16">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-orange-500 p-4 shadow">
          Liste von Gruppen
          <GroupList></GroupList>
        </div>
        <div className="flex flex-col px-4">
          <div className="mb-4 w-full rounded-lg bg-red-600 p-4 shadow">
            Gruppen-Aktion
            <Button>Beitreten</Button>
          </div>
          <div className="w-full rounded-lg bg-cyan-700 p-4 shadow sm:block">Gruppen-Info</div>
        </div>
      </div>
    </main>
  );
}
