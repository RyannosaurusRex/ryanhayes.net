import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div className="max-w h-auto relative">
      <img
        src={"/" + src}
        alt={`Cover Image for ${title}`}
        className={'shadow-small mx-auto hover:shadow-medium transition-shadow duration-200 mx-auto'}
      />
    </div>
  )
  return (
    <div className="">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title} className="">{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
