import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="z-0 block h-max w-full bg-[url('/images/background.webp')] blur-sm"></div>
      <div className="z-10 blur-none">test</div>
    </>
  );
};

export default Test;
