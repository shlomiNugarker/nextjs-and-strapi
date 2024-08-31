import Image from 'next/image'
import componentResolver from '../utils/component-resolver'
import { formatDate, getStrapiMedia } from '../helpers/api-helpers'
import ImageFallback from './ImageFallback'
import MDXContent from '../helpers/MDXContent'
import { humanize, markdownify, slugify } from '../utils/textConverter'
import Link from 'next/link'
import { FaRegFolder, FaRegUserCircle } from 'react-icons/fa'

interface Article {
  id: number
  attributes: {
    title: string
    description: string
    slug: string
    cover: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    authorsBio: {
      data: {
        attributes: {
          name: string
          avatar: {
            data: {
              attributes: {
                url: string
              }
            }
          }
        }
      }
    }
    blocks: any[]
    publishedAt: string
  }
}

export default function Post({ data }: { data: Article }) {
  const isRtl = false
  const { title, description, publishedAt, cover, authorsBio } = data.attributes
  const author = authorsBio.data?.attributes
  const imageUrl = getStrapiMedia(cover.data?.attributes.url)
  const authorImgUrl = getStrapiMedia(
    authorsBio.data?.attributes.avatar.data.attributes.url
  )

  return (
    <section className="section pt-7">
      <div className="container">
        <div className="row justify-center">
          <article className="lg:col-10">
            {imageUrl && (
              <div className="mb-10">
                <ImageFallback
                  src={imageUrl}
                  height={100}
                  width={200}
                  alt={title}
                  className="w-full rounded"
                />
              </div>
            )}
            <h1
              dangerouslySetInnerHTML={markdownify(title)}
              className="h2 mb-4"
            />
            <ul className="mb-4">
              <li className="mr-4 inline-block">
                {/* <Link href={`/authors/${slugify(author)}`}> */}
                <FaRegUserCircle
                  className={`-mt-1 ${isRtl ? 'ml-2' : 'mr-2'} inline-block`}
                />
                {humanize(authorsBio.data.attributes.name)}
                {/* </Link> */}
              </li>
              <li className="mr-4 inline-block">
                <FaRegFolder
                  className={`-mt-1 ${isRtl ? 'ml-2' : 'mr-2'} inline-block`}
                />
                {/* {categories?.map((category: string, index: number) => (
                  <Link
                    key={category}
                    href={`/categories/${slugify(category)}`}
                  >
                    {humanize(category)}
                    {index !== categories.length - 1 && ', '}
                  </Link>
                ))} */}
              </li>
              {/* {date && (
              <li className="mr-4 inline-block">
                <FaRegClock
                  className={`-mt-1 ${isRtl ? "ml-2" : "mr-2"} inline-block`}
                />
                {dateFormat(date)}
              </li>
            )} */}
            </ul>
            <div className="content mb-10">
              <MDXContent content={description} />
            </div>
            <div className="row items-start justify-between">
              <div className="mb-10 flex items-center lg:col-5 lg:mb-0">
                <h5 className="mr-3">{'tagTitle' + ':'} </h5>
                <ul>
                  {/* {tags?.map((tag: string) => (
                    <li key={tag} className="inline-block">
                      <Link
                        className="m-1 block rounded bg-theme-light px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-theme-light dark:hover:bg-darkmode-primary dark:hover:text-dark"
                        href={`/tags/${slugify(tag)}`}
                      >
                        {humanize(tag)}
                      </Link>
                    </li>
                  ))} */}
                </ul>
              </div>
              <div className="flex items-center lg:col-4">
                <h5 className="mr-3">{'shareTitle' + ':'} </h5>
                {/* <Share
                  className="social-icons m-1"
                  title={title}
                  description={description}
                  slug={post.slug!}
                  lang={params.lang}
                /> */}
              </div>
            </div>
          </article>
        </div>

        {/* <!-- Related posts --> */}
        {/* <div className="section pb-0">
          <h2 className="h3 mb-12 text-center">{related_post}</h2>
          <div className="row justify-center">
            {similarPosts.map((post) => (
              <div key={post.slug} className="lg:col-4 md:col-6 mb-14">
                <BlogCard lang={params.lang} data={post} />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
    // <article className="space-y-8">
    //   {imageUrl && (
    //     <ImageFallback
    //       src={imageUrl}
    //       alt="article cover image"
    //       width={400}
    //       height={400}
    //       className="w-full h-96 object-cover rounded-lg"
    //     />
    //   )}
    //   <div className="space-y-6">
    //     <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
    //     <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
    //       <div className="flex items-center md:space-x-2">
    //         {authorImgUrl && (
    //           <ImageFallback
    //             src={authorImgUrl}
    //             alt="article cover image"
    //             width={400}
    //             height={400}
    //             className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
    //           />
    //         )}
    //         <p className="text-md dark:text-violet-400">
    //           {author && author.name} • {formatDate(publishedAt)}
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="dark:text-gray-100">
    //     <p>{description}</p>

    //     {data.attributes.blocks.map((section: any, index: number) =>
    //       componentResolver(section, index)
    //     )}
    //   </div>
    // </article>
  )
}
