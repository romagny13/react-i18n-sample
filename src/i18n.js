import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// const resources = {
//   en: {
//     translation: {
//       title: "My title"
//     }
//   },
//   fr: {
//     translation: {
//       title: "Mon titre"
//     }
//   }
// };

import translationEn from "../locales/en/translation.json";
import translationFr from "../locales/fr/translation.json";

// with json files
const resources = {
  en: {
    translation: translationEn
  },
  fr: {
    translation: translationFr
  }
};

// i18n.use(initReactI18next).init({
//   resources,
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//   }
// });

// use language detector
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});

export default i18n;
