import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('home')}</h1>
    </>
  );
};

export default LandingPage;
