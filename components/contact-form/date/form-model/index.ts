import moment from 'moment'
import { InputData } from '../../types'

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === 'development'

export interface DemoDateForm {
  demoUserStatus: string | null
  demoUserCalendarDto: {
    demoUserId: string | null
    devDemoUserId: string | null
    timezone: string
    date: string
    time: string
  }
}

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
    date: {
      placeholder: 'Date',
      name: 'date',
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
    date: isDev
      ? moment('2023-07-20', moment.ISO_8601).format()
      : '2023-07-20T00:00:00.000Z',
    time: isDev ? 'test' : '',
  },
}
