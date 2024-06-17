import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from './locals/de.json';
import eng from './locals/eng.json';
import fr from './locals/fr.json';
import pl from './locals/pl.json';

const resources = {
    eng:{
        translation: eng
    },
    pl:{
        translation: pl
    },
    fr:{
        translation: fr
    },
    de:{
        translation: de
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    fallbackLng: 'eng',
    resources,
});

export default i18n;