import Link from 'next/link'
import ImageFallback from './ImageFallback'
import { FaRegFolder, FaRegUserCircle } from 'react-icons/fa'
import { humanize, plainify } from '../utils/textConverter'
import { getStrapiMedia } from '../helpers/api-helpers'

const d = {
  id: 1,
  attributes: {
    title: 'Hello there!',
    description: 'Description of the article',
    slug: 'article-title',
    createdAt: '2024-08-22T10:00:14.190Z',
    updatedAt: '2024-08-28T10:55:06.459Z',
    publishedAt: '2024-08-22T11:09:29.478Z',
    cover: {
      data: {
        id: 17,
        attributes: {
          url: 'https://res.cloudinary.com/duajg3ah1/image/upload/v1724842404/Designer_4_039fd430bb.jpg',
        },
      },
    },
    category: {
      data: {
        id: 1,
        attributes: {
          name: 'Category Name',
          slug: 'Category-name',
          description: 'description of category name',
          createdAt: '2024-08-22T10:01:31.439Z',
          updatedAt: '2024-08-24T03:02:01.153Z',
          articles: {
            data: [
              {
                id: 1,
                attributes: {
                  title: 'Hello there!',
                  description: 'Description of the article',
                  slug: 'article-title',
                  createdAt: '2024-08-22T10:00:14.190Z',
                  updatedAt: '2024-08-28T10:55:06.459Z',
                  publishedAt: '2024-08-22T11:09:29.478Z',
                },
              },
            ],
          },
        },
      },
    },
    authorsBio: {
      data: {
        id: 1,
        attributes: {
          name: 'Shlomi Nugarker ',
          email: 'shlomin1231@gmail.com',
          createdAt: '2024-08-22T09:58:32.214Z',
          updatedAt: '2024-08-28T10:55:57.506Z',
          avatar: {
            data: {
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
          },
          articles: {
            data: [
              {
                id: 1,
                attributes: {
                  title: 'Hello there!',
                  description: 'Description of the article',
                  slug: 'article-title',
                  createdAt: '2024-08-22T10:00:14.190Z',
                  updatedAt: '2024-08-28T10:55:06.459Z',
                  publishedAt: '2024-08-22T11:09:29.478Z',
                },
              },
            ],
          },
        },
      },
    },
  },
}

// d.attributes.description

const BlogCard = ({ data, lang }: { data: any; lang: string }) => {
  const isRtl = lang === 'he'

  const title = data.attributes.title
  const category = data.attributes.category.data?.attributes
  const postLink = `/blog/${category?.slug}/${data.attributes.slug}`

  const imageUrl = getStrapiMedia(data.attributes.cover.data?.attributes.url)

  const authorsBio = data.attributes.authorsBio.data?.attributes

  const avatarUrl = getStrapiMedia(authorsBio?.avatar.data.attributes.url)
  const summary_length = 200
  // return <></>
  return (
    <div
      className="bg-body dark:bg-darkmode-body m-3
"
    >
      {imageUrl && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={imageUrl}
          alt={title || ''}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3">
        <Link href={postLink}>{title}</Link>
      </h4>
      <ul className="mb-4">
        <li className={`${isRtl ? 'ml-4' : 'mr-4'}inline-block`}>
          <FaRegFolder
            className={`-mt-1 ${isRtl ? 'ml-2' : 'mr-2'}  inline-block`}
          />
          {/* {categories?.map((category, index) => ( */}
          {/* <Link href={categoryLinks[index]}>
            {humanize(category)}
            {index !== categories.length - 1 && ', '}
          </Link> */}
          {/* ))} */}
        </li>
        {/* {date && <li className="inline-block">{dateFormat(date)}</li>} */}
      </ul>
      <p className="mb-6">
        {plainify(
          data.attributes.description!.slice(0, Number(summary_length))
        )}
      </p>
      <Link className="btn btn-outline-primary btn-sm" href={postLink}>
        {/* {read_more} */}
        read more
      </Link>
    </div>
  )
}

export default BlogCard
