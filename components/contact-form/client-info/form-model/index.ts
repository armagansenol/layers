import { InputData } from '../../types'

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === 'development'

enum ClientInfoFormKeys {
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

export const clientInfoFormModel: { [key in ClientInfoFormKeys]: InputData } = {
  acceptFromSendingLayers: {
    placeholder: 'Accept From Sending Layers',
    name: 'acceptFromSendingLayers',
    default: '',
    required: true,
    type: 'checkbox',
  },
  acceptKvkk: {
    placeholder: 'Kvkk',
    name: 'acceptKvkk',
    default: '',
    required: true,
    type: 'checkbox',
  },
  name: {
    placeholder: 'Name*',
    name: 'name',
    default: '',
    required: true,
    type: 'text',
  },
  surname: {
    placeholder: 'Surname*',
    name: 'surname',
    default: '',
    required: true,
    type: 'text',
  },
  companyName: {
    placeholder: 'Company Name*',
    name: 'companyName',
    default: '',
    required: true,
    type: 'text',
  },
  countryCode: {
    placeholder: 'C code',
    name: 'countryCode',
    default: '',
    required: true,
    type: 'text',
  },
  title: {
    placeholder: 'Title*',
    name: 'title',
    default: '',
    required: true,
    type: 'text',
  },
  numberOfEmployees: {
    placeholder: 'Number of Employees*',
    name: 'numberOfEmployees',
    default: '',
    required: true,
    type: 'text',
  },
  interestedProduct: {
    placeholder: 'Interested Product*',
    name: 'interestedProduct',
    default: '',
    required: true,
    type: 'text',
  },
  phone: {
    placeholder: 'Phone*',
    name: 'phone',
    default: '',
    required: true,
    type: 'text',
  },
  note: {
    placeholder: 'Message',
    name: 'note',
    default: '',
    required: true,
    type: 'text',
  },
  companyEmail: {
    placeholder: 'Company Email*',
    name: 'companyEmail',
    default: '',
    required: true,
    type: 'text',
  },
  usedHrProduct: {
    placeholder: 'If there any HR software that you use',
    name: 'usedHrProduct',
    default: '',
    required: true,
    type: 'checkbox',
  },
}

export const initialValues: ClientInfoForm = {
  acceptKvkk: isDev ? true : null,
  acceptFromSendingLayers: isDev ? true : null,
  companyEmail: isDev ? 'test@neyasis.com' : '',
  companyName: isDev ? 'test' : '',
  countryCode: isDev ? 'test' : '+90',
  name: isDev ? 'test' : '',
  surname: isDev ? 'test' : '',
  title: isDev ? 'test' : '',
  numberOfEmployees: isDev ? '9' : '',
  interestedProduct: isDev ? ['test'] : [],
  phone: isDev ? 'test' : '',
  note: isDev ? 'test' : '',
  usedHrProduct: isDev ? 'test' : '',
}