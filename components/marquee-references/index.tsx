import s from './references-marquee.module.scss'

import { Marquee } from '@/components/marquee'
import Image from 'next/image'

type Props = {
  items: { logo: string }[]
}

const MarqueeReferences = ({ items = [{ logo: '' }] }: Props) => {
  return (
    <div className={s.referencesMarquee}>
      <Marquee duration={30} repeat={3}>
        <>
          {items.map((item, i) => {
            return (
              <div className={s.iconC} key={i}>
                <Image
                  alt="Layers Logo"
                  height={150}
                  src={item.logo}
                  width={150}
                />
              </div>
            )
          })}
        </>
      </Marquee>
    </div>
  )
}

export default MarqueeReferences
