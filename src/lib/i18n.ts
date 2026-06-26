import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["ar", "en"],
    fallbackLng: "ar",
    defaultNS: "common",
    ns: ["common", "home", "services", "pricing", "portfolio", "contact"],
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json?v=${new Date().getTime()}`,
    },
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "arco-lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
