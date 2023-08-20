import s from './date.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'
import moment from 'moment-timezone'

import SliderDay from '@/components/contact-form/slider-day'
import Select from '@/components/select'
import {
  generateDays,
  generateHours,
  getFormattedDate,
  getTimezones,
} from '@/utils'
import { DemoDateForm, demoDateFormModel } from './form-model'

const hours = generateHours()
const timezones = getTimezones()
const today = moment(moment().format('YYYY-MM-DD'))
const dayInfoArray = generateDays(today, 5)

type Props = {
  formik?: FormikProps<DemoDateForm>
}

const ClientDate = ({ formik }: Props) => {
  function handleDay(val: string) {
    const date = getFormattedDate(
      val,
      formik?.values.demoUserCalendarDto.time ?? '00:00'
    )

    formik?.setFieldValue(
      `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.date.name}`,
      date
    )

    console.log('formik', formik?.values.demoUserCalendarDto.date)
    console.log('arg', val)
    console.log('formattedDate', date)
  }

  function handleTimezone(value: string) {
    console.log(value)

    formik?.setFieldValue(
      `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.timezone.name}`,
      value
    )
  }

  function handleTime(hour: string) {
    if (hour === formik?.values.demoUserCalendarDto.time) {
      console.log('same')
      formik?.setFieldValue(
        `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.time.name}`,
        ''
      )
      return
    }

    formik?.setFieldValue(
      `demoUserCalendarDto.${demoDateFormModel.demoUserCalendarDto.time.name}`,
      hour
    )
  }

  return (
    <div className={s.phaseDate}>
      <h3>Select Day</h3>
      <div
        className={cn(s.days, {
          ['input-required']:
            formik?.errors.demoUserCalendarDto?.date &&
            formik?.touched.demoUserCalendarDto?.date,
        })}
      >
        <SliderDay
          formik={formik}
          callback={handleDay}
          slideData={dayInfoArray}
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
          <Select
            label="Select Timezones"
            options={timezones}
            callback={handleTimezone}
          />
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
                onClick={() => handleTime(hour)}
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
