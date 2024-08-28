'use client'

// components/ScrollProgressBar.js
import { useState, useEffect } from 'react'

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercentage = (scrollTop / (docHeight - winHeight)) * 100
      setScrollProgress(scrollPercentage)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-blue-600"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgressBar
