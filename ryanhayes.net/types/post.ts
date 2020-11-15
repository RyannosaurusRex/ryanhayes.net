import Author from './author'

type PostType = {
  title: string
  permalink: string
  date: string
  image: string
  author: string
  excerpt: string
  layout: "post" | null
  content: string
}

export default PostType
