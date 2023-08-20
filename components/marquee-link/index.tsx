import s from './marquee-link.module.scss'

import cn from 'clsx'
import { useMedia } from 'react-use'

import IconArrow from '@/components/icons/icon-arrow'
import { Marquee } from '@/components/marquee'
import { CursorType, useCursorStore } from '@/lib/cursorStore'

type Props = {
  title?: string
  text: {
    t1: string
    t2: string
  }
  mediaSrc?: string | null
}

const MarqueeLink = ({
  title = '',
  text = {
    t1: '',
    t2: '',
  },
  mediaSrc = null,
}: Props) => {
  const isMobile = useMedia('(max-width: 800px)', true)
  const { setType, setMediaSrc } = useCursorStore()

  function handleMouseEnter(src: string) {
    setType(CursorType.marqueeLink)
    setMediaSrc(src)
  }

  return (
    <div className={cn(s.nextItem, 'cursor-pointer')}>
      {title && <small className={s.title}>{title}</small>}
      <div
        className={s.marqueeC}
        {...(mediaSrc && {
          onMouseEnter: () => handleMouseEnter(mediaSrc),
          onMouseLeave: () => setType(CursorType.default),
        })}
      >
        <Marquee repeat={2} duration={20} inverted={!isMobile}>
          <h5 className={s.marqueeText}>
            <span>{text.t1}</span>
            <span>{text.t2}</span>
          </h5>
        </Marquee>

        <div className={cn(s.iconC, 'flex-center', 'hidden-overflow')}>
          <div className={cn(s.transformC, s.tuple, 'flex-center')}>
            <div className={cn(s.icon, 'flex-center')}>
              <IconArrow />
            </div>
          </div>

          <div className={cn(s.transformC, 'flex-center')}>
            <div className={cn(s.icon, 'flex-center')}>
              <IconArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarqueeLink
