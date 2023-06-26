import '../styles/globals.css'
import Layout from 'components/layout'
import Script from 'next/script'
import * as gtag from 'lib/gtag'

// Font Awesome の設定
// FontAwesomeのアイコンが、一瞬大きく表示されてから、設定値のサイズになるのを防止するため。
// アイコン表示後に、遅れてFontAwesomeのCSS設定が適用されるのが原因。
// そのため、この _app.js に設定をしておく。
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  // const router = useRouter()

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config), '${gtag.GA_MEASUREMENT_ID}
      `,
        }}
      /> */}

      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  )
}

export default MyApp
