import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import theme from '@/config/theme.json'
import Header from '@/layouts/partials/Header'
import Providers from '@/layouts/partials/Providers'
import TwSizeIndicator from '@/layouts/helpers/TwSizeIndicator'
import '@/styles/main.scss'
import { fetchAPI } from '@/layouts/utils/fetch-api'
import { getStrapiMedia } from '@/layouts/helpers/api-helpers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

async function getGlobal(lang: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

  if (!token)
    throw new Error('The Strapi API Token environment variable is not set.')

  const path = `/global`
  const options = { headers: { Authorization: `Bearer ${token}` } }

  const urlParamsObject = {
    populate: [
      'metadata.shareImage',
      'favicon',
      'notificationBanner.link',
      'navbar.links',
      'navbar.navbarLogo.logoImg',
      'footer.footerLogo.logoImg',
      'footer.menuLinks',
      'footer.legalLinks',
      'footer.socialLinks',
      'footer.categories',
    ],
    locale: lang,
  }
  return await fetchAPI(path, urlParamsObject, options)
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const global = await getGlobal(params.lang)
  const isRtl = params.lang === 'he'
  const direction = isRtl ? 'rtl' : 'ltr'

  const pf = theme.fonts.font_family.primary
  const sf = theme.fonts.font_family.secondary

  const navbarLogoUrl = getStrapiMedia(
    global.data?.attributes.navbar.navbarLogo.logoImg.data?.attributes.url
  )

  const footerLogoUrl = getStrapiMedia(
    global.data?.attributes.footer.footerLogo.logoImg.data?.attributes.url
  )

  return (
    <html suppressHydrationWarning={true} lang="he">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? '&family=' + sf : ''
          }&display=swap`}
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={inter.className}
        style={{ direction }}
      >
        <TwSizeIndicator />
        <Providers>
          <Header
            logoText={
              global.data?.attributes.navbar.navbarLogo.logoText as string
            }
            logoUrl={navbarLogoUrl}
            lang={params.lang}
            links={global.data?.attributes.navbar.links ?? []}
          />
          {children}
        </Providers>
      </body>
    </html>
  )
}
