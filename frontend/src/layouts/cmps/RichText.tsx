import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface RichTextProps {
  data: {
    content: string
  }
}

export default function RichText({ data }: RichTextProps) {
  return (
    <section className="rich-text p-6  ">
      <Markdown remarkPlugins={[remarkGfm]}>{data.content}</Markdown>
    </section>
  )
}
