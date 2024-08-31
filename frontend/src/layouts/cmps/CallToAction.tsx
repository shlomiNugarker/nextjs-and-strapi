import Link from 'next/link'
import ImageFallback from './ImageFallback'
import { markdownify } from '../utils/textConverter'

const CallToAction = ({ data }: { data: any }) => {
  return (
    <>
      <section className="mb-28">
        <div className="container">
          <div className="rounded-xl bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light xl:p-20">
            <div className="row items-center justify-between flex">
              <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
                <ImageFallback
                  className="w-full"
                  src={data.picture.data.attributes.url}
                  width={392}
                  height={390}
                  alt={data.picture.data.attributes.alternativeText || ''}
                />
              </div>
              <div className="md:col-7 md:order-1 m-2">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.title)}
                  className="mb-2"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(data.description)}
                  className="mb-6"
                />
                {data.buttonEnable && (
                  <Link className="btn btn-primary" href={data.buttonLink}>
                    {data.buttonLabel}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction
