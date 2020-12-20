import PostPreview from './post-preview'
import React, { useMemo, useState } from 'react'
import PostCard from './PostCard'
import { Post, PostEdge,  } from './../lib/wpApi'

type Props = {
  posts: Post[]
}

const MoreStories: React.FC<{posts: Post[]}> = props => {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        The Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 md:row-gap-0 mb-32">
        {props.posts.map((post) => (
            <PostCard
              key={post.slug + post.title}
              title={post.title}
              draft={false}
              image={post.featuredImage?.node.sourceUrl}
              slug={post.slug}
              categories={post.categories?.edges}
              excerpt={post.excerpt}
              date={new Date(post.date).toLocaleDateString('mmddyyyy')}
            />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
