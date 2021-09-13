const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {
        BASE_API: (() => {
            if (isDev) return 'http://localhost:8000/api'
            if (isProd) {
                return 'https://example.com/api'
            }
            if (isStaging) return 'https://example.com/api'
            return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
        BASE_APP_URL: (() => {
            if (isDev) return 'http://localhost:3000'
            if (isProd) {
                return 'https://example.com'
            }
            if (isStaging) return 'https://example.com'
            return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
        })(),
        SITE_NAME: 'example',
    }

    return {
        env,
        images: {
            domains: ['http://127.0.0.1', 'localhost', 'example.com']
        }
    }
}

