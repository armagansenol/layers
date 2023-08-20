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

// export interface Response {
//   date: string
//   email: string
//   nameSurname: string
//   responseName: string
//   responseSurname: string
//   time: string
//   title: string
// }
