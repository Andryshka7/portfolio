import type { Message } from '@/types'

const escapeMarkdownV2 = (text: string): string => {
    return text.replace(/[_*\[\]()~`>#+\-=|{}.!]/g, '\\$&')
}

const escapeEmail = (email: string): string => {
    // Only escape the most problematic markdown characters, preserve dots and common email characters
    return email.replace(/[_*\[\]()~`>#+\-=|{}.!]/g, (match) => {
        // Don't escape dots, hyphens, or underscores in email addresses
        return match === '.' || match === '-' || match === '_' ? match : '\\' + match
    })
}

const formatMessageContent = (message: string): string => {
    // Only escape the most problematic markdown characters, preserve dots and other common characters
    return message
        .split('\n')
        .map((line) =>
            line.replace(/[_*\[\]()~`>#+\-=|{}.!]/g, (match) => {
                // Don't escape dots, exclamation marks, or other common punctuation
                return match === '.' ||
                    match === '!' ||
                    match === '?' ||
                    match === ',' ||
                    match === ':' ||
                    match === ';'
                    ? match
                    : '\\' + match
            })
        )
        .join('\n')
}

const formatTelegramMessage = (message: Message): string => {
    const escapedName = escapeMarkdownV2(message.name)
    const escapedSubject = escapeMarkdownV2(message.subject)
    const formattedMessage = formatMessageContent(message.message)
    const escapedEmail = escapeEmail(message.email)

    return `✨ *New Message*

👤 *${escapedName}*
📧 ${escapedEmail}
📝 ${escapedSubject}

💬 ${formattedMessage}`
}

export { formatTelegramMessage }
