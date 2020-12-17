import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, Post } from '../lib/wpApi'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

import config from '../website-config'
import HeaderMenu from '../components/header-menu'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const morePosts = allPosts
  return (
    <>
      <Layout>
        <Head>
          <title>{config.title}</title>
        </Head>
        <Container>
          <HeaderMenu />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = await (await getAllPostsForHome(false)).posts.edges.map((post) => {
    return post.node;
  })
  return {
    props: { allPosts: allPosts },
  }
}
