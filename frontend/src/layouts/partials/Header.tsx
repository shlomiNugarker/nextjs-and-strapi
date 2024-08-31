'use client'
import React, { useState } from 'react'
import ThemeSwitcher from '../cmps/ThemeSwitcher'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from '../cmps/Logo'
import ScrollProgressBar from '../cmps/ScrollProgressBar'

interface NavLink {
  id: number
  url: string
  newTab: boolean
  text: string
}

const Header = ({
  lang,
  links,
  logoText,
  logoUrl,
}: {
  lang: string
  links: Array<NavLink>
  logoText: string
  logoUrl: string | null
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isRtl = lang === 'he'

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header z-30 ${'sticky top-0'}`}>
      {/* Navbar */}
      <nav className="navbar container py-3">
        {/* logo */}
        <div className="order-0">
          <Logo src={logoUrl}>
            {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
          </Logo>
        </div>

        {/* navbar toggler */}
        <button
          className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"
          onClick={toggleMenu}
        >
          <svg
            id="show-button"
            className={`h-6 fill-current ${menuOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
          >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
          <svg
            id="hide-button"
            className={`h-6 fill-current ${menuOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
          >
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </button>

        <ul
          style={{ direction: isRtl ? 'rtl' : 'ltr' }}
          className={`navbar-nav order-3 ${
            menuOpen ? 'block' : 'hidden'
          } w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8`}
        >
          {links.map((link, i) => (
            <React.Fragment key={`menu-${i}`}>
              <li className="nav-item">
                <Link
                  href={link.url}
                  className={`nav-link block ${
                    (pathname === `${link.url}/` || pathname === link.url) &&
                    'active'
                  }`}
                  onClick={closeMenu}
                >
                  {link.text}
                </Link>
              </li>
            </React.Fragment>
          ))}
          <ThemeSwitcher className="" />
        </ul>
      </nav>
      {/* <ScrollProgressBar /> */}
    </header>
  )
}

export default Header
