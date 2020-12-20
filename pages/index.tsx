import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import HeaderMenu from '../components/header-menu'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import { Post, getAllPostsForHome } from '../lib/wpApi'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { filter, reduce } from 'lodash';

import config from '../website-config'
import Link from 'next/link'
import React from 'react'
type WordpressPost = {

}

type Props = {
  allPosts: Post[]
}

const Index : React.FC<{allPosts: Post[]}> = ({ allPosts }) => {
  //const heroPost = allPosts[0]
  const morePosts = allPosts;

  // Fills up full Blog Post articles.
  const blogPosts: Post[] = [];
  allPosts.map((post) => {
    let isBlogCategory = false;
    post.categories.edges.forEach((cat) => {
      if (cat.node.name === "Blog") {
        isBlogCategory = true;
      }
    })
    if (isBlogCategory) {
      blogPosts.push(post)
    }
  })

  const newsletters: Post[] = [];
  allPosts.map((post) => {
    let isNewsletter = false;
    post.categories.edges.forEach((cat) => {
      if (cat.node.name === "Newsletter") {
        isNewsletter = true;
      }
    })
    if (isNewsletter) {
      blogPosts.push(post)
    }
  })

  return (
    <>
      <Layout>
        <Head>
          <title>{config.title}</title>
        </Head>
        <Container>
          <HeaderMenu />
          <Intro />
          {blogPosts.length > 0 && <MoreStories posts={blogPosts} />}
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
    // revalidate: 1
  }
}
