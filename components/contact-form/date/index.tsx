import s from './date.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'
import moment from 'moment-timezone'
import { useTranslation } from 'next-i18next'

import SliderDay from '@/components/contact-form/slider-day'
import Select from '@/components/select'
import { Locales } from '@/global'
import { generateDays, generateHours, getTimezones } from '@/utils'
import { DemoDateForm, DemoDateFormKeys } from '../types'
import { demoDateFormModel } from './form-model'

const hours = generateHours()
const timezones = getTimezones()

type Props = {
  formik?: FormikProps<DemoDateForm>
}

const ClientDate = ({ formik }: Props) => {
  const { t, i18n } = useTranslation('contactForm')

  const today = moment(
    moment()
      .locale(i18n?.language as Locales)
      .format('YYYY-MM-DD')
  )
  const days = generateDays(today, 5)

  function updateCalendarDto(field: string, value: string) {
    formik?.setFieldValue(
      `${DemoDateFormKeys.demoUserCalendarDto}.${field}`,
      value
    )
  }

  function handleDay(val: string) {
    const field = demoDateFormModel.demoUserCalendarDto.day.name

    if (val === formik?.values.demoUserCalendarDto.day) {
      updateCalendarDto(field, '')
      return
    }

    updateCalendarDto(field, val)
  }

  function handleTimezone(val: string) {
    const field = demoDateFormModel.demoUserCalendarDto.timezone.name

    updateCalendarDto(field, val)
  }

  function handleTime(val: string) {
    const field = demoDateFormModel.demoUserCalendarDto.time.name

    if (val === formik?.values.demoUserCalendarDto.time) {
      updateCalendarDto(field, '')
      return
    }

    updateCalendarDto(field, val)
  }

  return (
    <div className={s.phaseDate}>
      <h3>{t('fields.selectDay')}</h3>
      <div
        className={cn(s.days, {
          ['input-required']:
            formik?.errors.demoUserCalendarDto?.day &&
            formik?.touched.demoUserCalendarDto?.day,
        })}
      >
        <SliderDay
          selected={formik?.values.demoUserCalendarDto.day}
          callback={handleDay}
          slideData={days}
        />
      </div>

      <h3>{t('fields.selectTime')}</h3>
      <div className={s.time}>
        <div
          className={cn(s.timeZone, {
            ['input-required']:
              formik?.errors.demoUserCalendarDto?.timezone &&
              formik?.touched.demoUserCalendarDto?.timezone,
          })}
        >
          <Select
            label={t('fields.selectTimezone')}
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
