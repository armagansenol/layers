import s from './client-info.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'

import {
  ClientInfoForm,
  contactFormModel,
} from '../form-model/client-info-form'
import { FormType } from '../types'

type Props = {
  formik?: FormikProps<ClientInfoForm>
  formType: FormType
}

const ClientInfo = ({ formType, formik }: Props) => {
  return (
    <div className={s.contactForm}>
      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.name && formik?.touched.name,
            })}
          >
            <input
              placeholder={contactFormModel.name.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.name.name}
              name={contactFormModel.name.name}
              onChange={formik?.handleChange}
              value={formik?.values.name}
            />
          </div>
        </div>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']:
                formik?.errors.surname && formik?.touched.surname,
            })}
          >
            <input
              placeholder={contactFormModel.surname.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.surname.name}
              name={contactFormModel.surname.name}
              onChange={formik?.handleChange}
              value={formik?.values.surname}
            />
          </div>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']:
                formik?.errors.companyName && formik?.touched.companyName,
            })}
          >
            <input
              placeholder={contactFormModel.companyName.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.companyName.name}
              name={contactFormModel.companyName.name}
              onChange={formik?.handleChange}
              value={formik?.values.companyName}
            />
          </div>
        </div>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.title && formik?.touched.title,
            })}
          >
            <input
              placeholder={contactFormModel.title.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.title.name}
              name={contactFormModel.title.name}
              onChange={formik?.handleChange}
              value={formik?.values.title}
            />
          </div>
        </div>
      </div>

      {formType === 'demo' && (
        <div className={s.row}>
          <div className={s.field}>
            <div
              className={cn(s.inputC, {
                ['input-required']:
                  formik?.errors.numberOfEmployees &&
                  formik?.touched.numberOfEmployees,
              })}
            >
              <input
                placeholder={contactFormModel.numberOfEmployees.placeholder}
                className={s.input}
                type="text"
                id={contactFormModel.numberOfEmployees.name}
                name={contactFormModel.numberOfEmployees.name}
                onChange={formik?.handleChange}
                value={formik?.values.numberOfEmployees}
              />
            </div>
          </div>
        </div>
      )}

      {formType === 'service' && (
        <div className={s.row}>
          <div className={s.field}>
            <div
              className={cn(s.inputC, {
                ['input-required']:
                  formik?.errors.interestedProduct &&
                  formik?.touched.interestedProduct,
              })}
            >
              <input
                placeholder={contactFormModel.interestedProduct.placeholder}
                className={s.input}
                type="text"
                id={contactFormModel.interestedProduct.name}
                name={contactFormModel.interestedProduct.name}
                onChange={formik?.handleChange}
                value={formik?.values.interestedProduct}
              />
            </div>
          </div>
        </div>
      )}

      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.phone && formik?.touched.phone,
            })}
          >
            <input
              placeholder={contactFormModel.phone.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.phone.name}
              name={contactFormModel.phone.name}
              onChange={formik?.handleChange}
              value={formik?.values.phone}
            />
          </div>
        </div>

        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']:
                formik?.errors.companyEmail && formik?.touched.companyEmail,
            })}
          >
            <input
              placeholder={contactFormModel.companyEmail.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.companyEmail.name}
              name={contactFormModel.companyEmail.name}
              onChange={formik?.handleChange}
              value={formik?.values.companyEmail}
            />
          </div>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']:
                formik?.errors.usedHrProduct && formik?.touched.usedHrProduct,
            })}
          >
            <input
              placeholder={contactFormModel.usedHrProduct.placeholder}
              className={s.input}
              type="text"
              id={contactFormModel.usedHrProduct.name}
              name={contactFormModel.usedHrProduct.name}
              onChange={formik?.handleChange}
              value={formik?.values.usedHrProduct}
            />
          </div>
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, s.textarea, {
              ['input-required']: formik?.errors.note && formik?.touched.note,
            })}
          >
            <textarea
              placeholder={contactFormModel.note.placeholder}
              className={s.input}
              id={contactFormModel.note.name}
              name={contactFormModel.note.name}
              onChange={formik?.handleChange}
              value={formik?.values.note}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(s.confirmation, 'cursor-pointer', {
          ['input-required']:
            formik?.errors.acceptKvkk && formik?.touched.acceptKvkk,
        })}
        onClick={() => {
          formik?.setFieldValue(
            contactFormModel.acceptKvkk.name,
            !formik?.values.acceptKvkk
          )
        }}
      >
        <div className={cn(s.checkbox)}>
          <div
            className={cn(s.fill, {
              [s.visible]: formik?.values.acceptKvkk,
            })}
          ></div>
        </div>
        <div className={s.legalText}>
          <small className={s.small}>
            I’ve read and accepted the{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={'/'}
              className={s.link}
              onClick={(e) => e.stopPropagation()}
            >
              Personal Data Protection and Processing Policy.
            </a>
          </small>
        </div>
      </div>

      <div
        className={cn(s.confirmation, 'cursor-pointer', {
          ['input-required']:
            formik?.errors.acceptFromSendingLayers &&
            formik?.touched.acceptFromSendingLayers,
        })}
        onClick={() => {
          console.log('2')

          formik?.setFieldValue(
            contactFormModel.acceptFromSendingLayers.name,
            !formik?.values.acceptFromSendingLayers
          )
        }}
      >
        <div className={cn(s.checkbox)}>
          <div
            className={cn(s.fill, {
              [s.visible]: formik?.values.acceptFromSendingLayers,
            })}
          ></div>
        </div>
        <div className={s.legalText}>
          <small className={s.small}>
            Send me emails with news, insights and event invitations.
          </small>
        </div>
      </div>
    </div>
  )
}

export default ClientInfo
