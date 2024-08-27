import componentResolver from '@/layouts/utils/component-resolver'
import { getPageBySlug } from '@/layouts/utils/get-page-by-slug'

type Props = {
  params: {
    lang: string
    slug: string
  }
}

export default async function page({ params }: Props) {
  const page = await getPageBySlug(params.slug, params.lang)
  if (page.data.length === 0) return null
  const contentSections = page.data[0].attributes.contentSections
  return contentSections.map((section: any, index: number) =>
    componentResolver(section, index)
  )
}
