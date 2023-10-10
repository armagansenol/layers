import s from './client-info.module.scss'

import cn from 'clsx'
import { FormikProps } from 'formik'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { defaultCountries, usePhoneInput } from 'react-international-phone'

import Select from '@/components/select'
import { Locales, routes } from '@/global'
import { getCountryCodes } from '@/utils'
import { ClientInfoForm, FormType } from '../types'
import { clientInfoFormModel } from './form-model'

const countryCodeOptions = getCountryCodes()

const numberOfEmployeeesOptions = [
  { ui: '1-10', value: '1-10' },
  { ui: '11 - 50', value: '11 - 50' },
  { ui: '51 - 100', value: '51 - 100' },
  { ui: '101 - 250', value: '101 - 250' },
  { ui: '250+', value: '250+' },
]

type Props = {
  formik?: FormikProps<ClientInfoForm>
  formType: FormType
}

const ClientInfo = ({ formType, formik }: Props) => {
  const { i18n, t } = useTranslation('contactForm')

  const interestedProductOptions = Object.values(
    routes[i18n.language as Locales].services.children
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

  const {
    country,
    setCountry,
    phone,
    handlePhoneValueChange,
    inputRef: phoneInputRef,
  } = usePhoneInput({
    countries: defaultCountries,
    defaultCountry: 'tr',
    value: formik?.values.phone,
    disableDialCodeAndPrefix: true,
    onChange: ({ phone, country }) => {
      formik?.setFieldValue(clientInfoFormModel.countryCode.name, country)
      formik?.setFieldValue(clientInfoFormModel.phone.name, phone)
    },
  })

  function handleCountryCode(val: any) {
    setCountry(val)
  }

  return (
    <div className={s.contactForm}>
      {/* interested product */}
      {formType === 'service' && (
        <div className={cn(s.row, s.interestedProduct)}>
          <div className="flex-center-y">
            <small>
              <Trans
                i18nKey="fields.interestedProduct"
                components={{ span: <span /> }}
              >
                {t('fields.interestedProduct')}
              </Trans>
            </small>
            <div className={cn(s.checks, 'flex-center')}>
              {interestedProductOptions.map((p, i) => {
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

      {/* name - surname */}
      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.name && formik?.touched.name,
            })}
          >
            <input
              placeholder={t('fields.name')}
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
              placeholder={t('fields.surname')}
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

      {/* companyName - title */}
      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']:
                formik?.errors.companyName && formik?.touched.companyName,
            })}
          >
            <input
              placeholder={t('fields.companyName')}
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
              placeholder={t('fields.title')}
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

      {/* numberOfEmployees */}
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
                label={t('fields.numberOfEmployees')}
                options={numberOfEmployeeesOptions}
              />
            </div>
          </div>
        </div>
      )}

      {/* countryCode - phone - companyEmail */}
      <div className={s.row}>
        <div className={s.field}>
          <div className={cn(s.inputC, s.countryCode)}>
            <Select
              options={countryCodeOptions}
              label={country}
              callback={handleCountryCode}
              defaultValue={country}
              value={country}
            />
          </div>

          <div
            className={cn(s.inputC, {
              ['input-required']: formik?.errors.phone && formik?.touched.phone,
            })}
          >
            <input
              className={s.input}
              name={clientInfoFormModel.phone.name}
              id={clientInfoFormModel.phone.name}
              onChange={handlePhoneValueChange}
              placeholder={t('fields.phone')}
              ref={phoneInputRef}
              type="tel"
              value={phone}
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
              placeholder={t('fields.companyEmail')}
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

      {/* usedHrProduct */}
      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, {
              ['input-required']:
                formik?.errors.usedHrProduct && formik?.touched.usedHrProduct,
            })}
          >
            <input
              placeholder={t('fields.usedHrProduct')}
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

      {/* note */}
      <div className={s.row}>
        <div className={s.field}>
          <div
            className={cn(s.inputC, s.textarea, {
              ['input-required']: formik?.errors.note && formik?.touched.note,
            })}
          >
            <textarea
              placeholder={t('fields.note')}
              className={s.input}
              id={clientInfoFormModel.note.name}
              name={clientInfoFormModel.note.name}
              onChange={formik?.handleChange}
              value={formik?.values.note}
            />
          </div>
        </div>
      </div>

      {/* acceptKvkk */}
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
            {i18n.language === 'en' ? (
              <>
                {t('fields.acceptKvkk.p1')}{' '}
                <Link
                  href="/pdf/personal-data-protection-and-processing-policy.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s.link}
                  onClick={(e) => e.stopPropagation()}
                  locale={false}
                >
                  {t('fields.acceptKvkk.p2')}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/pdf/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={s.link}
                  onClick={(e) => e.stopPropagation()}
                  locale={false}
                >
                  {t('fields.acceptKvkk.p1')}
                </Link>
                {t('fields.acceptKvkk.p2')}
              </>
            )}
          </small>
        </div>
      </div>

      {/* acceptFromSendingLayers */}
      <div
        className={cn(s.confirmation, 'cursor-pointer', {
          ['input-required']:
            formik?.errors.acceptFromSendingLayers &&
            formik?.touched.acceptFromSendingLayers,
        })}
        onClick={() => {
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
            {t('fields.acceptFromSendingLayers')}
          </small>
        </div>
      </div>
    </div>
  )
}

export default ClientInfo
