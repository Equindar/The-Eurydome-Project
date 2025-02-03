import i18n, { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { fallbackLng, getOptions } from './settings';


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`../../i18n/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

interface LanguageDirection {
  language: string;
  direction: string;
}

/**
 * Utility function to parse HTTP-Header AcceptLanguage.
 * @param acceptLanguage String: HTTP-Header Accept-Language
 * @returns Array: all detected languages
 */
function parseAcceptLanguageHeader(acceptLanguage: string): LanguageDirection[] {
  const languages: LanguageDirection[] = [];
  const languageTags = acceptLanguage.split(',');

  for (const tag of languageTags) {
    const [language, priority] = tag.trim().split(';q=');
    const direction = language.startsWith('ar') || language.startsWith('he') ? 'rtl' : 'ltr';
    languages.push({ language, direction });
  }

  return languages;
}

/**
 * Utility function to determine the text direction based on the prefered language
 * @param acceptLanguageHeader String: HTTP-Header Accept-Language
 * @returns String: 'ltr' | 'rtl' describing the text direction based on the prefered/highest ordered language
 */
export function getTextDirection(acceptLanguageHeader: string): string {
  const languages = parseAcceptLanguageHeader(acceptLanguageHeader);

  // Return the direction of the first language with highest priority
  return languages.length > 0 ? languages[0].direction : 'ltr';
}
