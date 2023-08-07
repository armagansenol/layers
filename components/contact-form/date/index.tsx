import React, { useState } from 'react'
import s from './date.module.scss'

import cn from 'clsx'

import moment from 'moment-timezone'
import EmblaCarousel from '@/components/embla-carousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import Select from '@/components/select'

function Slide(props: Slide) {
  return (
    <>
      <div className={s.day}>
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

type Slide = {
  dayName: string
  dayNumber: number
  monthName: string
}

type Props = {}

const ClientDate = (props: Props) => {
  const [selectedHour, setSelectedHour] = useState<string | null>(null)

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

  const hours = generateHoursArray()
  const tz = moment.tz.names()

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
  console.log(intervalDays)

  return (
    <div className={s.phase2}>
      <h3>Select Day</h3>
      <div className={s.days}>
        <EmblaCarousel
          slideSpacing={4}
          slides={intervalDays.map((data, i) => {
            return <Slide key={i} {...data} />
          })}
          options={OPTIONS}
        />
        {/* {intervalDays.map((day, i) => {
        return (
          <div className={s.day} key={i}>
            <p className={s.dayName}>{day.dayName}</p>
            <p className={s.dayNumber}>{day.dayNumber}</p>
            <p className={s.dayMonth}>{day.monthName}</p>
          </div>
        )
      })} */}
      </div>

      <h3>Select Time</h3>
      <div className={s.time}>
        <div className={s.timeZone}>
          <Select options={tz} />
        </div>
        <div className={s.hours}>
          {hours.map((hour, i) => {
            return (
              <div
                className={cn(s.hour, {
                  [s.selected]: selectedHour === hour,
                })}
                key={i}
                onClick={() => setSelectedHour(hour)}
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
