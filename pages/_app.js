import '../styles/globals.css'
import Layout from 'components/layout'

// Font Awesome の設定
// FontAwesomeのアイコンが、一瞬大きく表示されてから、設定値のサイズになるのを防止するため。
// アイコン表示後に、遅れてFontAwesomeのCSS設定が適用されるのが原因。
// そのため、この _app.js に設定をしておく。
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
