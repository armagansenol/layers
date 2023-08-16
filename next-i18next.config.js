// @ts-check
const isClient = typeof window !== 'undefined'

/**
 * @type {import('next-i18next').UserConfig}
 */

module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    localeDetection: false,
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: isClient
    ? '/locales'
    : require('path').resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}
