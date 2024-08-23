import { BlogCard } from '@/layouts/cmps/BlogCard'
import Breadcrumbs from '@/layouts/cmps/Breadcrumbs'
import PageHeader from '@/layouts/partials/PageHeader'
import { fetchAPI } from '@/layouts/utils/fetch-api'
import { Article } from '@/types/Article'

async function fetchdata(
  start: number,
  limit: number
): Promise<Article | undefined> {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
    const path = `/articles`
    const urlParamsObject = {
      sort: { createdAt: 'desc' },
      populate: {
        cover: { fields: ['url'] },
        category: { populate: '*' },
        authorsBio: {
          populate: '*',
        },
      },
      pagination: {
        start: start,
        limit: limit,
      },
    }
    const options = { headers: { Authorization: `Bearer ${token}` } }
    const responseData = await fetchAPI(path, urlParamsObject, options)

    return responseData.data
  } catch (error) {
    console.error(error)
  }
}

export default async function BlogPage({
  params,
}: {
  params: { lang: string }
}) {
  const data = await fetchdata(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT))

  return (
    <>
      <PageHeader title={'title'}>
        <Breadcrumbs lang={params.lang} />
      </PageHeader>
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">
                {/* {currentPosts.map((post: any, index: number) => ( */}
                <div key={'index'} className="mb-14 md:col-6">
                  {data && <BlogCard data={data} lang={params.lang} />}
                </div>
                {/* ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// function loadMorePosts(): void {
//   const nextPosts = meta!.pagination.start + meta!.pagination.limit
//   fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT))
// }
