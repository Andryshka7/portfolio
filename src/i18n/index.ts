import type { Locale } from 'types'

import en from './locales/en.json'
import lv from './locales/lv.json'
import ru from './locales/ru.json'

const translations = { en, ru, lv }

type NestedObject = {
    [key: string]: string | NestedObject
}

const returnNested = (object: NestedObject, nestedKey: string) => {
    if (!nestedKey.includes('.')) return object[nestedKey] as string

    const key = nestedKey.slice(0, nestedKey.indexOf('.'))
    const nestedKeys = nestedKey.slice(nestedKey.indexOf('.') + 1)

    return returnNested(object[key] as NestedObject, nestedKeys)
}

const useTranslations =
    (language: Locale = 'en') =>
    (key: string) =>
        returnNested(translations[language], key)

export { useTranslations }
