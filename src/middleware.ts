import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { i18n } from '../i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Function to get the best matching locale or default locale
function getLocale(request: NextRequest): string {
  // Convert request headers to a plain object for Negotiator
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Get preferred languages from the request headers
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  // List of supported locales
  const locales: string[] = [...i18n.locales]

  // Return matched locale or default to 'he'
  return (
    matchLocale(languages, locales, i18n.defaultLocale) || i18n.defaultLocale
  )
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Force redirect to default locale when visiting the root path
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${i18n.defaultLocale}`, request.url))
  }

  // Ignore certain paths (e.g., public files)
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      // Add other public files here if necessary
    ].includes(pathname)
  ) {
    return
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect to the correct locale if missing
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

// Configuration to ignore certain paths (e.g., _next and API routes)
export const config = {
  matcher: ['/((?!_next).*)'],
}
