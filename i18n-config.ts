export const i18n = {
  defaultLocale: 'he',
  locales: ['he', 'en', 'de', 'cs'],
} as const

export type Locale = (typeof i18n)['locales'][number]
