import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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

i18n.use(LanguageDetector).init({
  resources,
  fallbackLng: "en"
});

export default i18n;
