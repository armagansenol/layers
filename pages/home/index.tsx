import HomeSlider from '@/components/home-slider'
import NextItemMarquee from '@/components/next-item-marquee'
import RequestDemo from '@/components/request-demo'
import Subscribe from '@/components/subscribe'
import WhyLayers from '@/components/why-layers'
import { Layout } from '@/layouts/default'
import cn from 'clsx'
import s from './home.module.scss'

const Home = () => {
  return (
    <Layout>
      <>
        <section className={cn(s.intro, 'content-box')}>
          <HomeSlider />
        </section>
        <section className={cn(s.whyLayersC, 'content-box')}>
          <RequestDemo />
          <WhyLayers />
        </section>
        <NextItemMarquee type="SERVICE" text="Assesments & Exams" url="/" />
        <Subscribe />
      </>
    </Layout>
  )
}

export default Home
