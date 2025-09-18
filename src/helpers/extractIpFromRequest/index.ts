const extractIpFromRequest = (request: Request) => {
    const headers = request.headers

    return (
        headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        headers.get('x-real-ip') ||
        headers.get('cf-connecting-ip') ||
        undefined
    )
}

export { extractIpFromRequest }