import '../styles/globals.scss'
import axios from 'axios'

function MyApp({ Component, pageProps, settings, headlines, isoServices }) {
  return (
    <Component
      {...pageProps}
      settings={settings}
      headlines={headlines}
      isoServices={isoServices}
    />
  )
}

MyApp.getInitialProps = async (appContext) => {
  const url = process.env.ADMIN_URL
  const { data: settings } = await axios.get(`${url}/settings`)
  const { data: headlines } = await axios.get(`${url}/headline-messages`)
  const { data: isoServices } = await axios.get(`${url}/iso-services`)
  // const myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('foo')
  //   }, 5000)
  // })

  return {
    settings: settings[0],
    headlines,
    isoServices,
  }
}

export default MyApp
