'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from './Logo'
import { CgWebsite } from 'react-icons/cg'
import { FaDiscord } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import Social from './Social'
import { markdownify } from '../utils/textConverter'

interface FooterLink {
  id: number
  url: string
  newTab: boolean
  text: string
  social?: string
}

interface CategoryLink {
  id: string
  attributes: {
    name: string
    slug: string
  }
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname()
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && 'dark:text-violet-400 dark:border-violet-400'
        }}`}
      >
        {text}
      </Link>
    </li>
  )
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/blog/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  )
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case 'WEBSITE':
      return <CgWebsite />
    case 'TWITTER':
      return <AiFillTwitterCircle />
    case 'YOUTUBE':
      return <AiFillYoutube />
    case 'DISCORD':
      return <FaDiscord />
    default:
      return null
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null
  logoText: string | null
  menuLinks: Array<FooterLink>
  categoryLinks: Array<CategoryLink>
  legalLinks: Array<FooterLink>
  socialLinks: Array<FooterLink>
}) {
  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light ">
      <div className="container">
        <div className="row items-center py-10 flex justify-between">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo src={logoUrl} />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <ul>
              {menuLinks.map((menu) => (
                <li className="m-3 inline-block" key={menu.id}>
                  <Link href={'/' + menu.url}>{menu.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={socialLinks} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p
            dangerouslySetInnerHTML={markdownify(
              '[Shlomi Nugarker](https://shlomi-nugarker-portfolio.vercel.app/) נבנה על ידי '
            )}
          />
        </div>
      </div>
    </footer>
  )
}
