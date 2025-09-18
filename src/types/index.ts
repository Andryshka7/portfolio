interface Message {
    name: string
    email: string

    ip?: string
    location?: string

    subject: string
    message: string
}

export type { Message }
