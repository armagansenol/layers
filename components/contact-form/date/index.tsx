import s from './date.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'
import moment from 'moment-timezone'

import EmblaCarousel from '@/components/embla-carousel'
import Select from '@/components/select'
import timezones from '@/public/timezones.json'
import { EmblaOptionsType } from 'embla-carousel-react'
import { DemoDateForm, demoDateFormModel } from '../form-model/demo-date-form'

type Slide = {
  dayName: string
  dayNumber: number
  monthName: string
  callback: () => void
}

function Slide(props: Slide) {
  return (
    <>
      <div className={s.day} onClick={props.callback}>
        <p className={s.dayName}>{props.dayName}</p>
        <p className={s.dayNumber}>{props.dayNumber}</p>
        <p className={s.dayMonth}>{props.monthName}</p>
      </div>
    </>
  )
}

const OPTIONS: EmblaOptionsType = {
  inViewThreshold: 0.5,
  slidesToScroll: 1,
  breakpoints: {
    '(min-width: 800px)': { align: 0.1, containScroll: false },
  },
}

type Props = {
  formik?: FormikProps<DemoDateForm>
}

const ClientDate = ({ formik }: Props) => {
  function generateHoursArray(): string[] {
    const hoursArray = []
    const startHour = 9 // 09:00 in 24-hour format
    const endHour = 18 // 18:00 in 24-hour format

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute of [0, 30]) {
        const timeStr = `${hour.toString().padStart(2, '0')}:${minute
          .toString()
          .padStart(2, '0')}`
        hoursArray.push(timeStr)
      }
    }

    return hoursArray
  }

  console.log('RENDER')

  const hours = generateHoursArray()

  const tz = timezones
    .map((zone) => {
      return `${zone.text}`
    })
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

  function generateIntervalAroundDay(day: string) {
    const intervalDays = 15
    const daysArray = []

    const startDay = moment(day).subtract(Math.floor(intervalDays / 2), 'days')
    for (let i = 0; i < intervalDays; i++) {
      const currentDay = startDay.clone().add(i, 'days')
      const dayObject = {
        monthName: currentDay.format('MMMM'),
        dayName: currentDay.format('dddd'),
        dayNumber: currentDay.date(),
      }
      daysArray.push(dayObject)
    }

    return daysArray
  }

  // Example usage: Generating interval around August 10, 2023
  const givenDay = '2023-08-6' // Format: YYYY-MM-DD
  const intervalDays = generateIntervalAroundDay(givenDay)

  function handleTimezone(value: string) {
    formik?.setFieldValue(
      `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.timezone.name}`,
      value
    )
  }

  function handleDay(index: number) {
    formik?.setFieldValue(
      `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.date.name}`,
      `${intervalDays[index].dayNumber} ${intervalDays[index].monthName} ${intervalDays[index].dayName}`
    )
  }

  return (
    <div className={s.phase2}>
      <h3>Select Day</h3>
      <div
        className={cn(s.days, {
          ['input-required']:
            formik?.errors.demoUserCalendarDto?.date &&
            formik?.touched.demoUserCalendarDto?.date,
        })}
      >
        <EmblaCarousel
          slideSpacing={4}
          slides={intervalDays.map((data, i) => {
            return <Slide callback={() => handleDay(i)} key={i} {...data} />
          })}
          options={OPTIONS}
        />
      </div>

      <h3>Select Time</h3>
      <div className={s.time}>
        <div
          className={cn(s.timeZone, {
            ['input-required']:
              formik?.errors.demoUserCalendarDto?.timezone &&
              formik?.touched.demoUserCalendarDto?.timezone,
          })}
        >
          <Select options={tz} callback={handleTimezone} />
        </div>
        <div
          className={cn(s.hours, {
            ['input-required']:
              formik?.errors.demoUserCalendarDto?.time &&
              formik?.touched.demoUserCalendarDto?.time,
          })}
        >
          {hours.map((hour, i) => {
            return (
              <div
                className={cn(s.hour, {
                  [s.selected]:
                    formik?.values.demoUserCalendarDto.time === hour,
                })}
                key={i}
                onClick={() =>
                  formik?.setFieldValue(
                    `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.time.name}`,
                    hour
                  )
                }
              >
                <span>{hour}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ClientDate
