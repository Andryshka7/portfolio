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
    const keys = key.split('.')

    let value = translations[language][keys[0]] || translations[defaultLocale][keys[0]]

    for (const key of keys) {
        if (value[key]) {
            value = value[key]
        }
    }

    return value
}

export { getLocaleFromUrl, useTranslations }
