import Link from 'next/link'
import Image from 'next/image'
import HighlightedText from './HighlightedText'
import { getStrapiMedia } from '../utils/api-helpers'
import { renderButtonStyle } from '../utils/render-button-style'
import ImageFallback from './ImageFallback'
import { markdownify } from '../utils/textConverter'

interface Button {
  id: string
  url: string
  text: string
  type: string
  newTab: boolean
}

interface Picture {
  data: {
    id: string
    attributes: {
      url: string
      name: string
      alternativeText: string
    }
  }
}

interface HeroProps {
  data: {
    id: string
    title: string
    description: string
    picture: Picture
    buttons: Button[]
  }
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url)

  return (
    <section className="section pt-14">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-7 md:col-9 mb-8 text-center">
            <h1
              className="mb-4 text-h3 lg:text-h1 slide-in-left"
              dangerouslySetInnerHTML={markdownify(data.title)}
            />
            <p
              className="mb-8 slide-in-right"
              dangerouslySetInnerHTML={markdownify(data.description ?? '')}
            />
            {/* {banner.button!.enable && (
              <Link
                className="btn btn-primary slide-in-left"
                href={banner.button!.link}
                target={
                  banner.button!.link.startsWith('http') ? '_blank' : '_self'
                }
                rel="noopener"
              >
                {banner.button!.label}
              </Link>
            )} */}
          </div>
          {data.picture.data.attributes.url && (
            <div className="col-12 slide-in-right">
              <ImageFallback
                src={data.picture.data.attributes.url}
                className="mx-auto"
                width="400"
                height="220"
                alt={
                  data.picture.data.attributes.alternativeText ||
                  'Alternative Text'
                }
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
