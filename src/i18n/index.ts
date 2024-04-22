import type { Locale } from 'types'

import en from './locales/en.json'
import lv from './locales/lv.json'
import ru from './locales/ru.json'

const defaultLocale = 'en'

const translations = { en, ru, lv }

const getLocaleFromUrl = (url: string) => {
    const [, locale] = url.split('/')
    return locale in translations ? (locale as Locale) : defaultLocale
}

const useTranslations = (language: keyof typeof translations) => (key: string) => {
    console.log(key)
    console.log(translations[defaultLocale]['navbar.title'])

    return translations[language][key] || translations[defaultLocale][key]
}

export { getLocaleFromUrl, useTranslations }
