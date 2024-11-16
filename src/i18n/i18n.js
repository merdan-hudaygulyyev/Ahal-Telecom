import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from "../locales/ru/translation.json";
import translationTM from "../locales/tm/translation.json";
import translationEN from "../locales/en/translation.json";

// Import translations
const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  tm: {
    translation: translationTM
  }
};

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language'),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
});
  
export default i18n;