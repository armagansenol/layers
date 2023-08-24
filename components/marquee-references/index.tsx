import s from './references-marquee.module.scss'

import cn from 'clsx'

import CustomImage from '@/components/custom-image'
import { Marquee } from '@/components/marquee'

type Props = {
  items: { logo: string }[]
}

const MarqueeReferences = (props: Props) => {
  return (
    <div className={s.referencesMarquee}>
      <Marquee duration={30} repeat={3}>
        <>
          {props.items.map((item, i) => {
            return (
              <div className={cn(s.iconC, 'flex-center')} key={i}>
                <CustomImage
                  alt="Layers Logo"
                  height={150}
                  loading="lazy"
                  src={item.logo}
                  style={{ objectFit: 'contain' }}
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
