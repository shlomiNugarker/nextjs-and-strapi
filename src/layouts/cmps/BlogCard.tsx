import Image from 'next/image'
import Link from 'next/link'
import { FaRegFolder, FaRegUserCircle } from 'react-icons/fa'
import ImageFallback from '../helpers/ImageFallback'
import { humanize } from '../utils/textConverter'
import { Article } from '@/types/Article'

export const BlogCard = ({ data, lang }: { data: Article; lang: string }) => {
  const isRtl = lang === 'he'

  console.log(data)

  return (
    <div className="bg-body dark:bg-darkmode-body">
      <ImageFallback
        className="mb-6 w-full rounded"
        src={'/image'}
        alt={'title'}
        width={445}
        height={230}
      />

      <h4 className="mb-3">
        <Link href={'postLink'}>{'title'}</Link>
      </h4>
      <ul className="mb-4">
        <li className={`${isRtl ? 'mr-0' : 'mr-4'} inline-block`}>
          <Link href={'authorLink'}>
            <FaRegUserCircle
              className={`-mt-1 ${isRtl ? 'ml-2' : 'mr-2'} inline-block`}
            />
            {humanize('author')}
          </Link>
        </li>
        <li className={`${isRtl ? 'ml-4' : 'mr-4'}inline-block`}>
          <FaRegFolder
            className={`-mt-1 ${isRtl ? 'ml-2' : 'mr-2'}  inline-block`}
          />
          categories
          {/* {categories?.map((category, index) => ( */}
          {/* <Link key={'index'} href={'categoryLinks[index]'}>
            {humanize(category)}
            {index !== categories.length - 1 && ', '}
          </Link> */}
          {/* ))} */}
        </li>
        {/* {date && <li className="inline-block">{dateFormat(date)}</li>} */}
      </ul>
      <p className="mb-6">
        content
        {/* {plainify(data.content!.slice(0, Number(summary_length)))} */}
      </p>
      <Link
        className="btn btn-outline-primary btn-sm"
        // href={`/blog/${article.attributes.slug}`}
        href={`/blog/dfsf`}
      >
        {'read_more'}
      </Link>
    </div>
  )
}
