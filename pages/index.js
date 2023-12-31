import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Posts from 'components/posts'
import Pagination from 'components/pagination'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
// import { aboutImg } from 'lib/image-loader'

export default function Home({ posts }) {
  return (
    <Container>
      <Meta />
      <Hero title="Home" subtitle="ここは最初のページ（Home）です！" imageOn />

      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}

export async function getStaticProps() {
  // const url = aboutImg
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))

  // const response = await fetch(url)
  // console.log(`response: ${response}`)
  // console.log('TEST')

  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    // const {base64} = await getPlaiceholder(post.eyecatch.url)
    // post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}
