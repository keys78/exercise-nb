import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from '../components/layout/Layout'
import { ReduxProviders } from '../redux/provider'
import ThemeRegistry from '../utils/themeRegistry/ThemeRegistry'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProviders>
      <ThemeRegistry>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeRegistry>
    </ReduxProviders>
  )
}

export default MyApp
