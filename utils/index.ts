import timezones from '@/public/json/timezones.json'
import { cubicBezier } from 'framer-motion'
import moment, { Moment } from 'moment'
import 'moment/locale/tr'
import { defaultCountries, parseCountry } from 'react-international-phone'

export const customEase1 = cubicBezier(0.16, 1, 0.3, 1)

export function generateDays(startDay: Moment, months: number) {
  const days = []
  const endDay = startDay.clone().add(months, 'months')

  while (startDay.isSameOrBefore(endDay, 'day')) {
    const dayName = startDay.format('dddd')
    const dayMonth = startDay.format('MMMM')
    const dayNumber = startDay.date()

    days.push({
      active: startDay.isoWeekday() !== 6 && startDay.isoWeekday() !== 7,
      yearMonthDate: startDay.format('YYYY-MM-DD'),
      name: dayName,
      number: dayNumber,
      month: dayMonth,
    })

    startDay.add(1, 'days')
  }

  return days
}

export function generateHours() {
  const startTime = moment('09:00', 'HH:mm')
  const endTime = moment('18:00', 'HH:mm')

  const hourArray = []
  let currentHour = startTime.clone()

  while (currentHour.isSameOrBefore(endTime)) {
    hourArray.push(currentHour.clone().format('HH:mm'))
    currentHour.add(30, 'minutes') // Add 30 minutes to move to the next half-hour
  }

  return hourArray
}

export function getTimezones() {
  const tz = timezones
    .map(({ text }: { text: string }) => {
      return { ui: text, value: text }
    })
    .sort((a: any, b: any) => {
      const textA = a.ui.toLowerCase()
      const textB = b.ui.toLowerCase()

      return textA.localeCompare(textB, undefined, { sensitivity: 'base' })
    })

  return tz
}

export function getFormattedDate(date?: string, time?: string) {
  return `${date}T${time}:00.000Z`
}

export function getCountryCodes() {
  const codes = defaultCountries.map((item) => {
    const country = parseCountry(item)

    return {
      ui: `+${country.dialCode} (${country.name})`,
      value: `${country.iso2}`,
    }
  })

  return codes
}

export function getDialCode(selectedCountryIso2: string) {
  const country = defaultCountries
    .map((item) => {
      return parseCountry(item)
    })
    .filter((item) => {
      return item.iso2 === selectedCountryIso2
    })

  return country[0].dialCode
}
