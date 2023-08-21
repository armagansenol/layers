import s from './client-info.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { ClientInfoForm, clientInfoFormModel } from './form-model'
import { FormType } from '../types'
import Select from '@/components/select'
import { routes } from '@/global'
import { getCountryCodes } from '@/utils'

type Props = {
  formik?: FormikProps<ClientInfoForm>
  formType: FormType
}

const countryCodeOptions = getCountryCodes()

const numberOfEmployeeesOptions = [
  { ui: '1-10', value: '1-10' },
  { ui: '11 - 50', value: '11 - 50' },
  { ui: '51 - 100', value: '51 - 100' },
  { ui: '101 - 250', value: '101 - 250' },
  { ui: '250+', value: '250+' },
]

const ClientInfo = ({ formType, formik }: Props) => {
  const { i18n } = useTranslation()

  const interestedProduct = Object.values(
    routes[i18n.language === 'en' ? 'en' : 'tr'].services.children
  ).map((service) => {
    return service.ui
  })

  function handleNumberOfEmployees(val: string) {
    formik?.setFieldValue(clientInfoFormModel.numberOfEmployees.name, val)
  }

  function handleInterestedProduct(val: string) {
    if (formik?.values.interestedProduct.includes(val)) {
      const filtered = formik?.values.interestedProduct.filter((item) => {
        return item !== val
      })

      formik?.setFieldValue(
        clientInfoFormModel.interestedProduct.name,
        filtered
      )

      return
    }

    formik?.setFieldValue(clientInfoFormModel.interestedProduct.name, [
      ...formik.values.interestedProduct,
      val,
    ])
  }

  function handleCountryCode(val: string) {
    formik?.setFieldValue(clientInfoFormModel.countryCode.name, val)
  }

  return (
    <div className={s.contactForm}>
      {formType === 'service' && (
        <div className={cn(s.row, s.interestedProduct)}>
          <div className="flex-center-y">
            <small>
              I’m interested in <span>(you may choose more than once)</span>
            </small>
            <div className={cn(s.checks, 'flex-center')}>
              {interestedProduct.map((p, i) => {
                return (
                  <div
                    className={cn(s.check, 'flex-center', {
                      [s.selected]:
                        formik?.values.interestedProduct.includes(p),
                      ['input-required']:
                        formik?.errors.interestedProduct &&
                        formik?.touched.interestedProduct,
                    })}
                    key={i}
                    onClick={() => handleInterestedProduct(p)}
                  >
                    <div className={s.checkbox}>
                      <div className={s.fill}></div>
                    </div>
                    <p>{p}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.name && formik?.touched.name,
            })}
          >
            <input
              placeholder={clientInfoFormModel.name.placeholder}
              className={s.input}
              type="text"
              id={clientInfoFormModel.name.name}
              name={clientInfoFormModel.name.name}
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
              placeholder={clientInfoFormModel.surname.placeholder}
              className={s.input}
              type="text"
              id={clientInfoFormModel.surname.name}
              name={clientInfoFormModel.surname.name}
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
              placeholder={clientInfoFormModel.companyName.placeholder}
              className={s.input}
              type="text"
              id={clientInfoFormModel.companyName.name}
              name={clientInfoFormModel.companyName.name}
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
              placeholder={clientInfoFormModel.title.placeholder}
              className={s.input}
              type="text"
              id={clientInfoFormModel.title.name}
              name={clientInfoFormModel.title.name}
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
              className={cn(s.inputC, s.numberOfEmployees, {
                ['input-required']:
                  formik?.errors.numberOfEmployees &&
                  formik?.touched.numberOfEmployees,
              })}
            >
              <Select
                callback={handleNumberOfEmployees}
                label="Number of Employees"
                options={numberOfEmployeeesOptions}
              />
            </div>
          </div>
        </div>
      )}

      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, s.countryCode, {
              ['input-required']:
                formik?.errors.countryCode && formik?.touched.countryCode,
            })}
          >
            <Select
              options={countryCodeOptions}
              label={formik?.values.countryCode ?? '+90'}
              callback={handleCountryCode}
              defaultVal={formik?.values.countryCode}
            />
          </div>
          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.phone && formik?.touched.phone,
            })}
          >
            <input
              placeholder={clientInfoFormModel.phone.placeholder}
              onInput={(e: any) =>
                (e.target.value = e.target.value
                  .replace(/[^0-9.]/g, '')
                  .replace(/(\..*?)\..*/g, '$1'))
              }
              maxLength={12}
              className={s.input}
              type="tel"
              id={clientInfoFormModel.phone.name}
              name={clientInfoFormModel.phone.name}
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
              placeholder={clientInfoFormModel.companyEmail.placeholder}
              className={s.input}
              type="text"
              id={clientInfoFormModel.companyEmail.name}
              name={clientInfoFormModel.companyEmail.name}
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
              placeholder={clientInfoFormModel.usedHrProduct.placeholder}
              className={s.input}
              type="text"
              id={clientInfoFormModel.usedHrProduct.name}
              name={clientInfoFormModel.usedHrProduct.name}
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
              placeholder={clientInfoFormModel.note.placeholder}
              className={s.input}
              id={clientInfoFormModel.note.name}
              name={clientInfoFormModel.note.name}
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
            clientInfoFormModel.acceptKvkk.name,
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
            <Link
              href="/pdf/personal-data-protection-and-processing-policy.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className={s.link}
              onClick={(e) => e.stopPropagation()}
            >
              Personal Data Protection and Processing Policy.
            </Link>
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
            clientInfoFormModel.acceptFromSendingLayers.name,
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
