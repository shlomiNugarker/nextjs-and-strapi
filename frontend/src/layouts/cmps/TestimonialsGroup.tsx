'use client'
import ImageFallback from './ImageFallback'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import { markdownify } from '../utils/textConverter'

interface Testimonial {
  text: string
  authorName: string
  picture: {
    data: {
      id: string
      attributes: {
        name: string
        alternativeText: string
        url: string
      }
    }
  }
}

interface TestimonialsProps {
  data: {
    id: string
    title: string
    description: string
    testimonials: Testimonial[]
  }
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
            <h2
              dangerouslySetInnerHTML={markdownify(data.title)}
              className="mb-4"
            />
            <p dangerouslySetInnerHTML={markdownify(data.description)} />
          </div>
          <div className="col-12">
            <Swiper
              className="h-full flex justify-center align-middle"
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.testimonials.map((item, index: number) => (
                <SwiperSlide key={index} className="h-full">
                  <div
                    className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light h-full flex flex-col justify-between"
                    style={{ minHeight: '400px' }}
                  >
                    <div>
                      <div className="text-dark dark:text-white">
                        <svg
                          width="33"
                          height="20"
                          viewBox="0 0 33 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.28375 19.41L0.79375 18.64C1.21375 17.0067 1.75042 15.07 2.40375 12.83C3.05708 10.5433 3.75708 8.28 4.50375 6.04C5.29708 3.75333 6.06708 1.77 6.81375 0.0899959H15.3538C14.9338 2.09666 14.4904 4.26667 14.0238 6.6C13.5571 8.88666 13.1371 11.15 12.7638 13.39C12.4371 15.5833 12.1571 17.59 11.9238 19.41H1.28375ZM31.69 0.0899959L32.18 0.859998C31.76 2.54 31.2233 4.5 30.57 6.74C29.9167 8.98 29.2167 11.2433 28.47 13.53C27.7233 15.77 26.9533 17.73 26.16 19.41H17.69C18.0167 17.9167 18.3433 16.33 18.67 14.65C18.9967 12.9233 19.3 11.22 19.58 9.54C19.9067 7.81333 20.1867 6.15667 20.42 4.57C20.7 2.93666 20.91 1.44333 21.05 0.0899959H31.69Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <blockquote
                        className="mt-8"
                        dangerouslySetInnerHTML={markdownify(item.text)}
                      />
                    </div>
                    <div className="mt-11 flex items-center">
                      <div className="text-dark dark:text-white">
                        <ImageFallback
                          height={50}
                          width={50}
                          className="rounded-full"
                          src={item.picture.data.attributes.url}
                          alt={
                            item.picture.data.attributes.alternativeText ||
                            'Testimonial image'
                          }
                          style={{
                            objectFit: 'cover',
                            height: `${50}px`,
                            width: `${50}px`,
                          }}
                        />
                      </div>
                      <div className="m-2">
                        <h3
                          dangerouslySetInnerHTML={markdownify(item.authorName)}
                          className="h5 font-primary font-semibold"
                        />
                        {/* <p
                          dangerouslySetInnerHTML={markdownify(item.text)}
                          className="text-dark dark:text-white"
                        /> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
