import '../styles/globals.scss'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  return (
    <Component
      {...pageProps}
      // settings={settings}
      // headlines={headlines}
      // isoServices={isoServices}
    />
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   const data = await axios.get('/api/settings')
//   console.log(data)
//   return {
//     // settings: settings[0],
//     // headlines,
//     // isoServices,
//   }
// }

export default MyApp
