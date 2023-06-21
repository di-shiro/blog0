import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import { getAllPosts } from 'lib/api'
import Posts from 'components/posts'
// import fs from 'node:fs/promises'
// import { getPlaiceholder } from 'plaiceholder'

// ローカルフォルダにあるアイキャッチ画像の代替画像
import { eyecatchLocal } from 'lib/constants'

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />

      <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    // const { base64 } = await getPlaiceholder(post.eyecatch.url)
    // post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
