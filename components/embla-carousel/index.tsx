import React, { ReactNode } from 'react'
import s from './embla.module.scss'

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

type PropType = {
  slideSpacing?: number
  slides: ReactNode[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div
      className={s.embla}
      style={
        {
          '--slide-spacing': `${props.slideSpacing}px`,
        } as React.CSSProperties
      }
    >
      <div className={s.emblaViewport} ref={emblaRef}>
        <div className={s.emblaContainer}>
          {slides.map((item, i) => (
            <div className={s.emblaSlide} key={i}>
              <div className={s.emblaSlideContent}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
