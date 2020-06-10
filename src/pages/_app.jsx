import React from 'react'

import 'tailwindcss/dist/tailwind.css'
import Layout from '~/components/Layout'

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default App
