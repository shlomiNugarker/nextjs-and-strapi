import DynamicIcon from '../helpers/DynamicIcon'

const Social = ({
  source,
  className,
}: {
  source: any[]
  className: string
}) => {
  return (
    <ul className={className}>
      {source.map((social) => (
        <li key={social.text} className="m-1">
          <a
            aria-label={social.text}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <span className="sr-only">{social.text}</span>
            <DynamicIcon className="inline-block" icon={'FaTwitter'} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
let g = {
  id: 2,
  url: 'https://www.youtube.com/',
  newTab: false,
  text: 'YouTube',
  social: 'YOUTUBE',
}
