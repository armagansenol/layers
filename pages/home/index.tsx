import HomeSlider from '@/components/home-slider'
import NextItemMarquee from '@/components/next-item-marquee'
import Subscribe from '@/components/subscribe'
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
        <NextItemMarquee type="SERVICE" text="Assesments & Exams" url="/" />
        <Subscribe />
      </>
    </Layout>
  )
}

export default Home
