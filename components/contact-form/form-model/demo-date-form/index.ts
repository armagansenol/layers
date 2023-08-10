import moment from 'moment'
import { InputData } from '../../types'

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
    timezone: 'test',
    date: moment().format(),
    time: 'test',
  },
}
