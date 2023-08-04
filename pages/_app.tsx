import CustomCursor from '@/components/custom-cursor'
import { ClientOnly } from '@/components/isomorphic'
import { RealViewport } from '@/components/real-viewport'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import { useMedia } from 'react-use'

import 'styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  const isMobile = useMedia('(max-width: 800px)', true)

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })
  }

  // const onExitComplete = () => {
  //   window.scrollTo({ top: 0 })
  // }

  return (
    <>
      {!isMobile && (
        <ClientOnly>
          <CustomCursor />
        </ClientOnly>
      )}
      <RealViewport />
      <Component {...pageProps} />
    </>
  )
}

export default App
