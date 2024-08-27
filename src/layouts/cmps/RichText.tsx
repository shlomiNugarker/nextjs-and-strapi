import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface RichTextProps {
  data: {
    content: string
  }
}

export default function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <section className="rich-text py-6 dark:bg-black dark:text-gray-50 ">
      {/* <Markdown children={data.body} remarkPlugins={[remarkGfm]} >   */}
      <Markdown remarkPlugins={[remarkGfm]}>{data.content}</Markdown>
    </section>
  )
}
