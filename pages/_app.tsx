import type { AppProps } from 'next/app'
import 'styles/global.scss'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useMedia } from 'react-use'

import CustomCursor from '@/components/custom-cursor'
import { ClientOnly } from '@/components/isomorphic'
import { RealViewport } from '@/components/real-viewport'
import nextI18nextConfig from '@/next-i18next.config'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  const isMobile = useMedia('(max-width: 800px)', true)

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })
  }

  return (
    <>
      <RealViewport />
      <QueryClientProvider client={queryClient}>
        <ClientOnly>{!isMobile && <CustomCursor />}</ClientOnly>

        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default appWithTranslation(App, nextI18nextConfig)
