import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'fr', // fallback language is French
    debug: true, // enable debug mode for development

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
