export const fallbackLng = 'en';
export const languages = [fallbackLng, 'de'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

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
