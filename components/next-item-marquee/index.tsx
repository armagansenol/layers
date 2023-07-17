import React from 'react'
import s from './next-item-marquee.module.scss'
import { Marquee } from '@/components/marquee'
import Link from 'next/link'

type Props = {
  type: 'SERVICE' | 'FEATURE'
  text: string
  url: string
}

const NextItemMarquee = ({
  type = 'FEATURE',
  text = 'text',
  url = '/',
}: Props) => {
  const formattedType = type === 'FEATURE' ? 'Feature' : 'Service'

  return (
    <section className={s.nextItem}>
      <small className={s.title}>Next {formattedType}</small>
      <Link href={url} className={s.marqueeC}>
        <Marquee repeat={2} duration={20}>
          <>
            <h5 className={s.marqueeText}>
              <span className={s.text}>Next {formattedType}</span>
              <span className={s.text}>{text}</span>
            </h5>
          </>
        </Marquee>
        <div className={s.iconC}>icon</div>
      </Link>
    </section>
  )
}

export default NextItemMarquee
