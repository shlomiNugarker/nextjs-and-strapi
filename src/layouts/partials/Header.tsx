import React from 'react'
import ThemeSwitcher from '../cmps/ThemeSwitcher'

const Header = ({ lang, links }: { lang: string; links: any }) => {
  return (
    <>
      <ThemeSwitcher className="mr-5" />
    </>
  )
}

export default Header
