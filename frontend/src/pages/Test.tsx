import ModeFrame from '@/components/ui/mode-frame';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="z-0 block h-max w-full bg-[url('/images/background.webp')] blur-sm"></div>
      <div className="z-10 blur-none">test</div>
      <ModeFrame name="Demo" description="current state of development" />
    </>
  );
};

export default Test;
