import { useTranslation } from '../../i18n';

interface TestProps {
    params: {
        lng: string;
    };
}

export const Test: React.FC<TestProps> = async (props) => {
    const { t } = await useTranslation(props.params.lng, 'translation');

    t('')

    return (
        <>
            <h1>{t('title')}</h1>
        </>
    );
};
