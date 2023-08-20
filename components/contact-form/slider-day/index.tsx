import s from './slider-day.module.scss'

import cn from 'clsx'

import EmblaCarousel from '@/components/embla-carousel'
import IconArrow from '@/components/icons/icon-arrow'
import { FormikProps } from 'formik'
import { DemoDateForm } from '../date/form-model'
import { Slide } from '../types'

function Slide(props: Slide) {
  return (
    <div
      className={cn(s.day, {
        [s.disabled]: !props.active,
        [s.selected]: props.formik?.values.demoUserCalendarDto.date.includes(
          props.yearMonthDate
        ),
      })}
      {...(props.callback && {
        onClick: () => props.callback && props.callback(props.yearMonthDate),
      })}
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
  formik?: FormikProps<DemoDateForm>
  callback?: (val: string) => void
  slideData: any[]
}

const SliderDay = (props: Props) => {
  const slides = props.slideData.map((data, i) => {
    return <Slide callback={props.callback} {...data} key={i} />
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
