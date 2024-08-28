/* eslint-disable jsx-a11y/alt-text */
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ImageFallback = (props: any) => {
  const { src, fallback = '/images/image-placeholder.png', ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  console.log({ imgSrc })

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      src={imgSrc || fallback}
      onError={() => {
        setImgSrc(fallback)
      }}
      {...rest}
    />
  )
}

export default ImageFallback
