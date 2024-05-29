import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button variant="outline">Test</Button>
    </>
  );
};

export default LandingPage;
