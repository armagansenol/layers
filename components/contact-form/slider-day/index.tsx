import React from 'react'
import s from './slider-day.module.scss'

import cn from 'clsx'

import EmblaCarousel from '@/components/embla-carousel'
import IconArrow from '@/components/icons/icon-arrow'

function PrevBtn() {
  return (
    <div className={cn(s.prevBtn, 'flex-center')}>
      <div className={s.transformC}>
        <IconArrow />
      </div>
    </div>
  )
}

function NextBtn() {
  return (
    <div className={cn(s.nextBtn, 'flex-center')}>
      <IconArrow />
    </div>
  )
}

type Props = {
  slides: any
}

const SliderDay = (props: Props) => {
  return (
    <EmblaCarousel
      slideSpacing={0}
      slides={props.slides}
      options={{
        slidesToScroll: 3,
        breakpoints: {
          '(min-width: 800px)': { align: 0.1, containScroll: false },
        },
      }}
      prevButton={PrevBtn()}
      nextButton={NextBtn()}
    />
  )
}

export default SliderDay
