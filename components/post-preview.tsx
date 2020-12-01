import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Image from 'next/image'
import Link from 'next/link'
import Author from '../types/author'
import { getStaticProps } from '../pages/[slug]'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: string
  slug: string
  draft?: boolean
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  draft,
}: Props) => {
  if (draft) return <></>;
  return (
    <div className="flex flex-row mb-10">
      <div className="mr-6 hidden md:block">
        <Image className="" src={`/${coverImage}`} layout="fixed" height={200} width={300}/>
      </div>
      <div className="ml-6">
        <p className="text-sm text-gray-500">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </p>
        <Link as={`${slug}`} href="/[slug]">
          <a href={`${slug}`} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900 hover:underline">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {excerpt}
            </p>
          </a>
        </Link>
        <div className="mt-3">
          <a href="#" className="text-base font-semibold text-blue-600 hover:text-indigo-500">
            Read full story
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
