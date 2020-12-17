import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import Header from '../components/header'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import { getPostBySlug, getAllPosts } from '../lib/api'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/wpApi'
import PostTitle from '../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import PostType from '../types/post'
import HeaderMenu from '../components/header-menu'
import DisqusComments from '../components/DisqusComments'

type Props = {
  post: any
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  console.log("draft: " + post.draft)
  if (post.draft) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <HeaderMenu />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Ryan Hayes
                </title>
                <meta property="og:image" content={post.image} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node.sourceUrl}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
              <DisqusComments id={post.slug} title={post.title} slug={post.slug} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const postswp = getPostAndMorePosts(params.slug, false, false)

  // Not used anymore, but potentially if I move WP content to markdown.
  // const content = await markdownToHtml(post.content || '')

  const data = await getPostAndMorePosts(params.slug, false, null)

  return {
    props: {
      post: data.post
    },
  }
}

/**
 * Allows Next.js to understand all of the static URLs that will map here beforehand, so it can statically generate them.
 */
export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.edges.map((edge:any) => {
      return {
        params: {
          slug: edge.node.slug,
        },
      }
    }),
    fallback: true,
  }
}
