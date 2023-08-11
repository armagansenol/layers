import { RealViewport } from '@/components/real-viewport'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
import 'styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })
  }

  // const onExitComplete = () => {
  //   window.scrollTo({ top: 0 })
  // }

  return (
    <>
      <RealViewport />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default App
