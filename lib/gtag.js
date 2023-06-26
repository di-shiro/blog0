export const GA_MEASURMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const pageview = (url) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', GA_MEASURMENT_ID, {
      page_path: url,
    })
  }
}
