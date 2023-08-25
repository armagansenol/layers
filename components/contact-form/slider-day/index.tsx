import s from './slider-day.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'

import EmblaCarousel from '@/components/embla-carousel'
import IconArrow from '@/components/icons/icon-arrow'
import { Day, DemoDateForm } from '../types'

function Slide(props: Day) {
  return (
    <div
      className={cn(s.day, {
        [s.disabled]: !props.active,
      })}
      {...(props.callback && {
        onClick: () => props.callback && props.callback(props.yearMonthDate),
      })}
    >
      <p className={cn(s.dayName, 'flex-center')}>
        {props.name.toUpperCase().substring(0, 3)}
      </p>
      <div
        className={cn(s.bottom, {
          [s.selected]: props.selected?.includes(props.yearMonthDate),
        })}
      >
        <p className={s.dayNumber}>{props.number}</p>
        <p className={s.dayMonth}>{props.month.substring(0, 3)}</p>
      </div>
    </div>
  )
}

function PrevBtn() {
  return (
    <div className={cn(s.prevBtn, 'flex-center')}>
      <div className={cn(s.transformC, 'flex-center')}>
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
  selected?: string
  formik?: FormikProps<DemoDateForm>
  callback?: (val: string) => void
  slideData: any[]
}

const SliderDay = (props: Props) => {
  const slides = props.slideData.map((data, i) => {
    return (
      <Slide
        callback={props.callback}
        {...data}
        key={i}
        selected={props.selected}
      />
    )
  })

  return (
    <EmblaCarousel
      slideSpacing={0}
      slides={slides}
      options={{
        slidesToScroll: 3,
        align: 0.3,
        containScroll: false,
        breakpoints: {
          '(min-width: 800px)': { align: 0.15, containScroll: false },
        },
      }}
      prevButton={PrevBtn()}
      nextButton={NextBtn()}
    />
  )
}

export default SliderDay
