'use client'
import BlogCard from '@/layouts/cmps/BlogCard'
import Breadcrumbs from '@/layouts/cmps/Breadcrumbs'
import ImageFallback from '@/layouts/cmps/ImageFallback'
import Loader from '@/layouts/cmps/Loader'
import { formatDate, getStrapiMedia } from '@/layouts/helpers/api-helpers'
import PageHeader from '@/layouts/partials/PageHeader'
import { fetchAPI } from '@/layouts/utils/fetch-api'
import { Article } from '@/types/Article'
import Link from 'next/link'
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
  const [articles, setArticles] = useState<any>([])
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
        setArticles(responseData.data)
      } else {
        setArticles((prevData: any[]) => [...prevData, ...responseData.data])
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
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row flex flex-wrap ">
                {articles.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6 w-1/3">
                    <BlogCard data={post} lang={params.lang} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
