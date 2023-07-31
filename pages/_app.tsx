import CustomCursor from '@/components/custom-cursor'
import { ClientOnly } from '@/components/isomorphic'
import 'blaze-slider/dist/blaze.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'

import 'styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })

    // reset scroll position
    window.scrollTo(0, 0)
    window.history.scrollRestoration = 'manual'
  }

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <ClientOnly>
        <CustomCursor />
      </ClientOnly>
      <Component {...pageProps} />
    </>
  )
}

export default App
