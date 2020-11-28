import Author from './author'

type PostType = {
  title: string
  slug: string
  date: string
  image: string
  author: string
  excerpt: string
  layout: "post" | null
  content: string
  draft: boolean
}

export default PostType
