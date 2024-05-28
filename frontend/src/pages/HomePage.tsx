import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('home')}
      <p>{t('h1', { ns: 'common' })}</p>
    </div>
  );
};

export default HomePage;
