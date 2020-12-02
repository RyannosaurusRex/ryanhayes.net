import PostPreview from './post-preview'
import Post from '../types/post'
import React, { useMemo, useState } from 'react'
import PostCard from './PostCard'

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
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-0 mb-32">
        {props.posts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              draft={post.draft}
              image={post.image}
              slug={post.slug}
              excerpt={post.excerpt}
              date={new Date(post.date).toLocaleDateString('mmddyyyy')}
            />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
