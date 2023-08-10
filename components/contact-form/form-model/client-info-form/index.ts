import { InputData } from '../../types'

export interface ClientInfoForm {
  acceptKvkk: boolean | null
  acceptFromSendingLayers: boolean | null
  companyName: string
  companyEmail: string
  interestedProduct: string
  name: string
  note: string
  numberOfEmployees: string
  phone: string
  surname: string
  title: string
  usedHrProduct: string
}

export const contactFormModel: { [key: string]: InputData } = {
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
    placeholder: 'Hr Products Used',
    name: 'usedHrProduct',
    default: '',
    required: true,
    type: 'checkbox',
  },
}

export const initialValues: ClientInfoForm = {
  acceptKvkk: true,
  acceptFromSendingLayers: true,
  companyEmail: 'test@neyasis.com',
  companyName: 'test',
  name: 'test',
  surname: 'test',
  title: 'test',
  numberOfEmployees: 'test',
  interestedProduct: 'test',
  phone: 'test',
  note: 'test',
  usedHrProduct: 'test',
}
