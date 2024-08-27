'use client'
import BlogList from '@/layouts/cmps/Blog-list'
import Breadcrumbs from '@/layouts/cmps/Breadcrumbs'
import Loader from '@/layouts/cmps/Loader'
import PageHeader from '@/layouts/partials/PageHeader'
import { fetchAPI } from '@/layouts/utils/fetch-api'
import { Article } from '@/types/Article'
import { useState, useCallback, useEffect } from 'react'

interface Meta {
  pagination: {
    start: number
    limit: number
    total: number
  }
}

export default function BlogPage({ params }: { params: { lang: string } }) {
  const [meta, setMeta] = useState<Meta | undefined>()
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState(true)

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true)
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

      if (start === 0) {
        setData(responseData.data)
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data])
      }

      setMeta(responseData.meta)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT))
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT))
  }, [fetchData])

  if (isLoading) return <Loader />

  return (
    <>
      <PageHeader title={'add title'}>
        <Breadcrumbs lang={params.lang} />
      </PageHeader>
      <BlogList data={data}>
        {meta!.pagination.start + meta!.pagination.limit <
          meta!.pagination.total && (
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
              onClick={loadMorePosts}
            >
              Load more posts...
            </button>
          </div>
        )}
      </BlogList>
    </>
  )
}
