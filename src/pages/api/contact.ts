import {
    formatTelegramMessage,
    sendTelegramMessage,
    extractIpFromRequest,
    extractLocationFromIp
} from '@/helpers'
import type { APIRoute } from 'astro'

const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData()

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const subject = formData.get('subject') as string
        const message = formData.get('message') as string

        const ip = extractIpFromRequest(request)
        const location = await extractLocationFromIp(ip)

        const telegramMessage = formatTelegramMessage({
            name,
            email,
            subject,
            message,
            ip,
            location
        })

        await sendTelegramMessage(telegramMessage)

        return new Response(
            JSON.stringify({ success: true, message: 'Message sent successfully!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
    } catch (error) {
        console.error('Error processing contact form:', error)
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to send message. Please try again.' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
    }
}

export { POST }
