export const i18n = {
  defaultLocale: 'en',
  locales: ['he', 'en', 'de', 'cs'],
} as const

export type Locale = (typeof i18n)['locales'][number]
