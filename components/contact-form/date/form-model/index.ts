import moment from 'moment'
import { DemoDateForm, InputData } from '../../types'

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === 'development'

export const demoDateFormModel: {
  demoUserCalendarDto: { [key: string]: InputData }
} = {
  demoUserCalendarDto: {
    demoUserId: {
      placeholder: 'Demo User Id',
      name: 'demoUserId',
      default: '',
      required: true,
      type: 'text',
    },
    devDemoUserId: {
      placeholder: 'Dev Demo User Id',
      name: 'devDemoUserId',
      default: '',
      required: true,
      type: 'text',
    },
    timezone: {
      placeholder: 'Timezone',
      name: 'timezone',
      default: '',
      required: true,
      type: 'text',
    },
    day: {
      placeholder: 'Day',
      name: 'day',
      default: '',
      required: true,
      type: 'text',
    },
    time: {
      placeholder: 'Time',
      name: 'time',
      default: '',
      required: true,
      type: 'text',
    },
  },
}

export const initialValues: DemoDateForm = {
  demoUserStatus: null,
  demoUserCalendarDto: {
    demoUserId: null,
    devDemoUserId: null,
    timezone: isDev ? 'test' : '',
    day: isDev ? moment().format('YYY-MM-DD') : '',
    time: isDev ? 'test' : '',
  },
}
