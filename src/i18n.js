import { createI18n } from 'vue-i18n';

import en from './data/locales/en';
import fr from './data/locales/fr';

export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: {
        en,
        fr,
    },
});