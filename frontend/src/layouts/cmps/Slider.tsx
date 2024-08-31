'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ImageFallback from './ImageFallback'
import { getStrapiMedia } from '../helpers/api-helpers'

const data = {
  id: 1,
  __component: 'shared.slider',
  files: {
    data: [
      {
        id: 19,
        attributes: {
          name: 'Audi-A6.webp',
          alternativeText: null,
          caption: null,
          width: 1024,
          height: 682,
          formats: {
            large: {
              ext: '.webp',
              url: '/uploads/large_Audi_A6_94e051a188.webp',
              hash: 'large_Audi_A6_94e051a188',
              mime: 'image/webp',
              name: 'large_Audi-A6.webp',
              path: null,
              size: 64.94,
              width: 1000,
              height: 666,
              sizeInBytes: 64938,
            },
            small: {
              ext: '.webp',
              url: '/uploads/small_Audi_A6_94e051a188.webp',
              hash: 'small_Audi_A6_94e051a188',
              mime: 'image/webp',
              name: 'small_Audi-A6.webp',
              path: null,
              size: 23.89,
              width: 500,
              height: 333,
              sizeInBytes: 23892,
            },
            medium: {
              ext: '.webp',
              url: '/uploads/medium_Audi_A6_94e051a188.webp',
              hash: 'medium_Audi_A6_94e051a188',
              mime: 'image/webp',
              name: 'medium_Audi-A6.webp',
              path: null,
              size: 44.04,
              width: 750,
              height: 500,
              sizeInBytes: 44036,
            },
            thumbnail: {
              ext: '.webp',
              url: '/uploads/thumbnail_Audi_A6_94e051a188.webp',
              hash: 'thumbnail_Audi_A6_94e051a188',
              mime: 'image/webp',
              name: 'thumbnail_Audi-A6.webp',
              path: null,
              size: 7.37,
              width: 234,
              height: 156,
              sizeInBytes: 7374,
            },
          },
          hash: 'Audi_A6_94e051a188',
          ext: '.webp',
          mime: 'image/webp',
          size: 81.82,
          url: '/uploads/Audi_A6_94e051a188.webp',
          previewUrl: null,
          provider: 'local',
          provider_metadata: null,
          createdAt: '2024-08-31T09:13:24.758Z',
          updatedAt: '2024-08-31T09:13:24.758Z',
        },
      },
      {
        id: 18,
        attributes: {
          name: 'Designer (6).jpeg',
          alternativeText: null,
          caption: null,
          width: 1024,
          height: 1024,
          formats: {
            large: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724848260/large_Designer_6_ed6cdade50.jpg',
              hash: 'large_Designer_6_ed6cdade50',
              mime: 'image/jpeg',
              name: 'large_Designer (6).jpeg',
              path: null,
              size: 123.16,
              width: 1000,
              height: 1000,
              sizeInBytes: 123164,
              provider_metadata: {
                public_id: 'large_Designer_6_ed6cdade50',
                resource_type: 'image',
              },
            },
            small: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724848259/small_Designer_6_ed6cdade50.jpg',
              hash: 'small_Designer_6_ed6cdade50',
              mime: 'image/jpeg',
              name: 'small_Designer (6).jpeg',
              path: null,
              size: 29.83,
              width: 500,
              height: 500,
              sizeInBytes: 29828,
              provider_metadata: {
                public_id: 'small_Designer_6_ed6cdade50',
                resource_type: 'image',
              },
            },
            medium: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724848259/medium_Designer_6_ed6cdade50.jpg',
              hash: 'medium_Designer_6_ed6cdade50',
              mime: 'image/jpeg',
              name: 'medium_Designer (6).jpeg',
              path: null,
              size: 67.35,
              width: 750,
              height: 750,
              sizeInBytes: 67351,
              provider_metadata: {
                public_id: 'medium_Designer_6_ed6cdade50',
                resource_type: 'image',
              },
            },
            thumbnail: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724848258/thumbnail_Designer_6_ed6cdade50.jpg',
              hash: 'thumbnail_Designer_6_ed6cdade50',
              mime: 'image/jpeg',
              name: 'thumbnail_Designer (6).jpeg',
              path: null,
              size: 4.52,
              width: 156,
              height: 156,
              sizeInBytes: 4523,
              provider_metadata: {
                public_id: 'thumbnail_Designer_6_ed6cdade50',
                resource_type: 'image',
              },
            },
          },
          hash: 'Designer_6_ed6cdade50',
          ext: '.jpeg',
          mime: 'image/jpeg',
          size: 129.6,
          url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724848260/Designer_6_ed6cdade50.jpg',
          previewUrl: null,
          provider: '@strapi/provider-upload-cloudinary',
          provider_metadata: {
            public_id: 'Designer_6_ed6cdade50',
            resource_type: 'image',
          },
          createdAt: '2024-08-28T12:31:01.980Z',
          updatedAt: '2024-08-28T15:42:11.705Z',
        },
      },
      {
        id: 17,
        attributes: {
          name: 'Designer (4).jpeg',
          alternativeText: null,
          caption: null,
          width: 1024,
          height: 1024,
          formats: {
            large: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724842404/large_Designer_4_039fd430bb.jpg',
              hash: 'large_Designer_4_039fd430bb',
              mime: 'image/jpeg',
              name: 'large_Designer (4).jpeg',
              path: null,
              size: 238.39,
              width: 1000,
              height: 1000,
              sizeInBytes: 238390,
              provider_metadata: {
                public_id: 'large_Designer_4_039fd430bb',
                resource_type: 'image',
              },
            },
            small: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724842404/small_Designer_4_039fd430bb.jpg',
              hash: 'small_Designer_4_039fd430bb',
              mime: 'image/jpeg',
              name: 'small_Designer (4).jpeg',
              path: null,
              size: 78.19,
              width: 500,
              height: 500,
              sizeInBytes: 78192,
              provider_metadata: {
                public_id: 'small_Designer_4_039fd430bb',
                resource_type: 'image',
              },
            },
            medium: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724842404/medium_Designer_4_039fd430bb.jpg',
              hash: 'medium_Designer_4_039fd430bb',
              mime: 'image/jpeg',
              name: 'medium_Designer (4).jpeg',
              path: null,
              size: 151.17,
              width: 750,
              height: 750,
              sizeInBytes: 151172,
              provider_metadata: {
                public_id: 'medium_Designer_4_039fd430bb',
                resource_type: 'image',
              },
            },
            thumbnail: {
              ext: '.jpeg',
              url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724842403/thumbnail_Designer_4_039fd430bb.jpg',
              hash: 'thumbnail_Designer_4_039fd430bb',
              mime: 'image/jpeg',
              name: 'thumbnail_Designer (4).jpeg',
              path: null,
              size: 10.53,
              width: 156,
              height: 156,
              sizeInBytes: 10526,
              provider_metadata: {
                public_id: 'thumbnail_Designer_4_039fd430bb',
                resource_type: 'image',
              },
            },
          },
          hash: 'Designer_4_039fd430bb',
          ext: '.jpeg',
          mime: 'image/jpeg',
          size: 247.78,
          url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724842404/Designer_4_039fd430bb.jpg',
          previewUrl: null,
          provider: '@strapi/provider-upload-cloudinary',
          provider_metadata: {
            public_id: 'Designer_4_039fd430bb',
            resource_type: 'image',
          },
          createdAt: '2024-08-28T10:53:26.580Z',
          updatedAt: '2024-08-28T10:53:26.580Z',
        },
      },
    ],
  },
}

export default function Slider({ data }: any) {
  const images = data.files.data.map((file: any) => {
    // Use large image format if available, otherwise fallback to default URL
    return getStrapiMedia(
      file.attributes.formats.large?.url || file.attributes.url
    )
  })

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{ delay: 3000 }}
      className="my-6"
    >
      {images.map((image: any, index: number) => (
        <SwiperSlide key={index}>
          <ImageFallback
            src={image}
            alt={`Slide ${index + 1}`}
            width={800}
            height={400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
