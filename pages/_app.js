import Head from 'next/head'

import 'styles/global.css'
import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nội Thất TL</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
