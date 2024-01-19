import { createInstance, FlatNamespace, KeyPrefix } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { FallbackNs } from 'react-i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { Logger } from '../log/Logger';
import { getOptions } from './settings';

const initI18next = async (lng: string, ns: string | string[]) => {
    // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
    const log = new Logger({ name: 'Library' }).getSubLogger({ name: 'i18n' });
    log.info('initializing...');
    const i18nInstance = createInstance();
    log.debug(`given params: [lng] ${lng}, [ns]: ${ns}`);
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(
                        `../../app/i18n/locales/${language}/${namespace}.json`
                    ),
            ),
        )
        .init(getOptions(lng, ns));
    log.debug(
        `using options:[lng] ${i18nInstance.options.lng}, [ns]: ${i18nInstance.options.ns}`,
    );
    return i18nInstance;
};

export async function useTranslation<
    Ns extends FlatNamespace,
    KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(lng: string, ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
    const i18nextInstance = await initI18next(
        lng,
        Array.isArray(ns) ? (ns as string[]) : (ns as string),
    );
    return {
        t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
        i18n: i18nextInstance,
    };
}
