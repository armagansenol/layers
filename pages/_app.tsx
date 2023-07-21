import type { AppProps } from 'next/app'
import 'styles/global.scss'
import 'blaze-slider/dist/blaze.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
