import HomeSlider from '@/components/home-slider'
import NextItemMarquee from '@/components/next-item-marquee'
import { Layout } from '@/layouts/default'
import cn from 'clsx'
import s from './home.module.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <Layout>
      <>
        <section className={cn(s.intro, 'content-box')}>
          <HomeSlider />
        </section>
        <NextItemMarquee type="SERVICE" text="Assesments & Exams" url="/" />
      </>
    </Layout>
  )
}

export default Home
