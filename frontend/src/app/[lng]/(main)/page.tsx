import { fallbackLng, languages } from '@/lib/i18n/settings';
import { useTranslation } from 'lib/i18n';
import { Logger } from 'lib/log/Logger';
import picture from 'media/images/test.jpg';
import Image from 'next/image';
import { Trans } from 'react-i18next/TransWithoutContext';

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
    <main className="mx-auto">
      <section className="pt-20">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 sm:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 inline-block max-w-2xl bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl">
              {t('index.hero-section.title-1')}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-white md:text-lg lg:mb-8 lg:text-xl">
              {t('index.hero-section.subtitle-1')}
            </p>
          </div>
          <div className="hidden sm:flex lg:col-span-5 lg:mt-0">
            <Image src={picture} alt="mockup" />
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-screen-xl gap-6 sm:grid-cols-3">
        <div className="h-24 rounded-lg bg-orange-500 shadow">Content #1</div>
        <div className="rounded-lg bg-red-600 shadow">Content #2</div>
        <div className="hidden rounded-lg bg-cyan-700 shadow sm:block">Content #3</div>
      </div>
    </main>
  );
}
