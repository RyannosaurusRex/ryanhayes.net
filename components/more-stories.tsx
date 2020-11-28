import PostPreview from './post-preview'
import Post from '../types/post'
import { useMemo, useState } from 'react'

type Props = {
  posts: Post[]
}

const MoreStories: React.FC<{posts: Post[], maxItems?: number}> = props => {
  const [itemsNumber, setItemsNumber] = useState(0)

  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        The Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-0 mb-32">
        {props.posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              draft={post.draft}
              coverImage={post.image}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
