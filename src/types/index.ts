interface Alert {
    content: null | { name: string; text: string }
    type: 'error' | 'success'
    timeout: number
    visible: boolean
}

interface Skill {
    skill: string
    level: 1 | 2 | 3
}

type Locale = 'en' | 'ru' | 'lv'

export { type Alert, type Locale, type Skill }
