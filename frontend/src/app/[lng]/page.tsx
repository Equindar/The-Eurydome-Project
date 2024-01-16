import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import { Test } from './components/Test';

export default async function Page({
    params: { lng },
}: {
    params: {
        lng: string;
    };
}) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng;
    const { t } = await useTranslation(lng);

    return (
        <>
            <main>
                <h1>Home</h1>
                <Test params={{ lng }} />
                <h2>
                    <Trans t={t} i18nKey="welcome">
                        Welcome to Next.js v13 <small>appDir</small> and i18next
                    </Trans>
                </h2>
                <hr style={{ marginTop: 20, width: '90%' }} />
                <div>...</div>
            </main>
        </>
    );
}
