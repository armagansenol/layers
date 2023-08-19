import React from 'react'
import s from './slider-day.module.scss'

import cn from 'clsx'

import EmblaCarousel from '@/components/embla-carousel'
import IconArrow from '@/components/icons/icon-arrow'

function Slide(props: any) {
  return (
    <div
      className={cn(s.day, {
        [s.disabled]: !props.active,
        [s.selected]: props.selected === props.name,
      })}
      onClick={props.callback}
    >
      <p className={cn(s.dayName, 'flex-center')}>
        {props.name.toUpperCase().substring(0, 3)}
      </p>
      <div className={s.bottom}>
        <p className={s.dayNumber}>{props.number}</p>
        <p className={s.dayMonth}>{props.month.substring(0, 3)}</p>
      </div>
    </div>
  )
}

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
  selected: any
  callback?: (index: number) => void
  slideData: any[]
}

const SliderDay = (props: Props) => {
  function handleCallback(i: any) {
    if (!props.callback) return

    props.callback(i)
  }

  const slides = props.slideData.map((data, i) => {
    return <Slide callback={() => handleCallback(i)} key={i} {...data} />
  })

  return (
    <EmblaCarousel
      slideSpacing={0}
      slides={slides}
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
