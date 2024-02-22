import { useTranslation } from '@/lib/i18n';

interface AppBarProps {
  lng: string;
}

const AppBar = async (props: AppBarProps) => {
  const { t } = await useTranslation(props.lng);
  return (
    <header className="mx-auto max-w-6xl px-4">
      <nav className="flex items-center justify-between py-4">
        <h1>{t('title')}</h1>
        <div className="flex items-center gap-4 dark:text-white">
          <p>Home</p>
          <p>Team</p>
          <p>Reviews</p>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
