import type { AppProps } from 'next/app'
import 'styles/global.scss'
import 'blaze-slider/dist/blaze.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <AnimatePresence initial={false} mode="wait">
      <Component key={pageKey} {...pageProps} />
    </AnimatePresence>
  )
}
