import { defaultNS } from '../../backup/src/lib/i18n/settings';
import Resources from './i18next.resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: Resources;
  }
}
