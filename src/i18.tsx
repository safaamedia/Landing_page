import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/anglais.json"
import fr from "./languages/français.json";
import ar from "./languages/arabe.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar },
  },
  lng: localStorage.getItem("lng") || "en",
  fallbackLng: "en", // Important: Add fallback language
  debug: true, // Enable for debugging
  interpolation: {
    escapeValue: false // React already does escaping
  }
});

// Save language preference when it changes
i18next.on('languageChanged', (lng) => {
  localStorage.setItem("lng", lng);
  console.log('Language changed and saved to localStorage:', lng);
});

export default i18next;