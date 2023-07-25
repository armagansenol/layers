import s from './next-item-marquee.module.scss'

import cn from 'clsx'
import { Marquee } from '@/components/marquee'
import IconArrow from '../icons/icon-arrow'
import Link from 'next/link'

type Props = {
  title?: string
  text: {
    t1: string
    t2: string
  }
  url: string
}

const NextItemMarquee = ({
  title = '',
  text = {
    t1: '',
    t2: '',
  },
  url = '/',
}: Props) => {
  return (
    <div className={cn(s.nextItem, 'cursor-pointer')}>
      {title && <small className={s.title}>{title}</small>}
      <div className={s.marqueeC}>
        <Marquee repeat={2} duration={20}>
          <>
            <h5 className={s.marqueeText}>
              <span className={s.text}>{text.t1}</span>
              <span className={s.text}>{text.t2}</span>
            </h5>
          </>
        </Marquee>
        <div className={s.iconC}>
          <IconArrow />
        </div>
      </div>
    </div>
  )
}

export default NextItemMarquee
