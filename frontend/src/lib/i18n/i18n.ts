import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const defaultNS = 'ns1';

export const resources = {
    en: {},
} as const;

i18next.use(initReactI18next).init({
    lng: 'en',
    ns: ['ns1', 'ns2'],
    defaultNS,
    resources,
});
