import { useTranslation } from '@/lib/i18n';
import { fallbackLng, languages } from '@/lib/i18n/settings';
import { Logger } from '@/lib/log/Logger';

interface DashboardProps {
  lng: string;
}

const Dashboard = async (props: DashboardProps) => {
  var lng = props.lng;
  const log = new Logger({ name: 'Dashboard' });
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, 'admin');

  return <div>{t('dashboard.title')}</div>;
};

export default Dashboard;
