import { getAllCategories, getAllSlugs } from 'lib/api'
import { getServerSideSitemap } from 'next-sitemap'

export default function Sitemap() {}

export async function getServerSideProps(context) {
  const posts = await getAllSlugs()
  const postFields = posts.map((post) => {
    return {
      loc: `${siteMeta.siteUrl}/${post.slug}`,
      lastmod: post.revisedAt,
      changefreq: 'daily',
    }
  })

  const cats = await getAllCategories()
  const catFields = cats.map((cat) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/category/${cat.slug}`,
    }
  })

  const allFields = [...postFields, ...catFields]

  return await getServerSideSitemap(context, allFields)
}
