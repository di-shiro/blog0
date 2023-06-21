export default async function handler(req, res) {
  if (req.query.secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/blog/schedule')
    await res.revalidate('/blog/music')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('status 500 : Error revalidating')
  }
}
