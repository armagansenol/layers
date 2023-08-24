import { FormikProps } from 'formik'

export enum FormType {
  contact = 'contact',
  demo = 'demo',
  service = 'service',
}

export type InputData = {
  placeholder: string
  name: string
  default: any
  required: boolean
  type: string
}

export interface FormData {
  acceptKvkk: boolean
  acceptFromSendingLayers: boolean
  companyEmail: string
  companyName: string
  createdDate: string
  countryCode?: string
  demoUserStatus: null
  demoUserCalendarDto: {
    demoUserId: null
    devDemoUserId: null
    timezone: string
    date: string
    time: string
  }
  formType: FormType
  interestedProduct: string[]
  name: string
  note: string
  numberOfEmployees: string
  usedHrProduct: string
  phone: string
  surname: string
  title: string
}

export type Day = {
  callback?: (val: string) => void
  active: boolean
  yearMonthDate: string
  name: string
  number: string
  month: string
  formik: FormikProps<DemoDateForm>
  selected?: string
}

export interface ResponseData {
  date: string
  email: string
  nameSurname: string
  responseName: string
  responseSurName: string
  time: string
  title: string
}

export interface Response {
  isSuccess: boolean
  messageCode: string
  data: ResponseData
}

export interface DemoDateForm {
  demoUserStatus: string | null
  demoUserCalendarDto: {
    demoUserId: string | null
    devDemoUserId: string | null
    timezone: string
    day?: string
    time: string
  }
}

export enum ClientInfoFormKeys {
  acceptKvkk = 'acceptKvkk',
  acceptFromSendingLayers = 'acceptFromSendingLayers',
  companyName = 'companyName',
  companyEmail = 'companyEmail',
  countryCode = 'countryCode',
  interestedProduct = 'interestedProduct',
  name = 'name',
  note = 'note',
  numberOfEmployees = 'numberOfEmployees',
  phone = 'phone',
  surname = 'surname',
  title = 'title',
  usedHrProduct = 'usedHrProduct',
}

export enum DemoDateFormKeys {
  demoUserStatus = 'demoUserStatus',
  demoUserCalendarDto = 'demoUserCalendarDto',
}

export interface ClientInfoForm {
  acceptKvkk: boolean | null
  acceptFromSendingLayers: boolean | null
  companyName: string
  companyEmail: string
  countryCode?: string
  interestedProduct: string[]
  name: string
  note: string
  numberOfEmployees: string
  phone: string
  surname: string
  title: string
  usedHrProduct: string
}
