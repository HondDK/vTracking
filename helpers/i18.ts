import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruTranslation from '../assets/locales/ru.json';
import enTranslation from '../assets/locales/en.json';

const resources = {
    ru: {
        translation: ruTranslation,
    },
    en: {
        translation: enTranslation,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru', // Если ключ перевода не найден на текущем языке, используйте русский язык по умолчанию.
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
