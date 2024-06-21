import type { MiddlewareHandler } from 'astro'

const middleware: MiddlewareHandler = (context, next) => {
    const url = context.url.href
    const pathName = context.url.pathname

    if (pathName.length > 1 && pathName.endsWith('/')) {
        return context.redirect(url.slice(0, url.length - 1))
    }

    return next()
}

export const onRequest = middleware
