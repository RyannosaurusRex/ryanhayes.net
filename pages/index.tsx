import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import HeaderMenu from '../components/header-menu'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { getAllPostsForHome } from '../lib/wpApi'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

import config from '../website-config'
import Link from 'next/link'
import React from 'react'
type WordpressPost = {

}

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{config.title}</title>
        </Head>
        <Container>
          <HeaderMenu />
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} maxItems={3} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'image',
  //   'draft',
  //   'excerpt'
  // ])

  const allPosts = await (await getAllPostsForHome(false)).posts.edges.map((post) => {
    return post.node;
  })
  // console.log(allPosts[0].node.slug)
  return {
    props: { allPosts },
  }
}
