import { useTranslation } from '@/lib/i18n';
import { fallbackLng, languages } from '@/lib/i18n/settings';
import { Logger } from '@/lib/log/Logger';

interface SidebarProps {
    params: {
        lng: string;
    };
}

export default async function Sidebar({ params: { lng } }: SidebarProps) {
    const log = new Logger({ name: 'Sidebar' });
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const { t } = await useTranslation(lng, 'admin');

    return <div>{t('admin:dashboard.sidebar.title')}</div>;
}
