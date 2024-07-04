import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en-translation.json";
import translationFR from "./locales/fr-translation.json";
import translationES from "./locales/es-translation.json";
import translationDE from "./locales/de-translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
