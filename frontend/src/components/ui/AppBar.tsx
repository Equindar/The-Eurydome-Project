import { useTranslation } from '@/lib/i18n';
import Link from 'next/link';

type AppBarProps = {
  lng: string;
};

const AppBar = async (props: AppBarProps) => {
  const { t } = await useTranslation(props.lng);
  return (
    <header className="mx-auto max-w-6xl px-4">
      <nav className="sticky top-0 z-10 p-4 drop-shadow-xl dark:bg-slate-600">
        <div className="mx-auto flex flex-col justify-between gap-4 dark:text-white sm:flex-row">
          <Link href="/"></Link>
          <p>Home</p>
          <p>Team</p>
          <p>Reviews</p>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
