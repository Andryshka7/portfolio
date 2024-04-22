interface Alert {
    content: null | { name: string; text: string }
    type: 'error' | 'success'
    timeout: number
    visible: boolean
}

type Locale = 'en' | 'ru' | 'lv'

interface Skill {
    skill: string
    level: 1 | 2 | 3
}

export { type Alert, type Locale, type Skill }
