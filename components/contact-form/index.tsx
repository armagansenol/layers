import { useState } from 'react'
import s from './contact-form.module.scss'

import cn from 'clsx'
import { useFormik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'
import moment from 'moment'
import { useMutation } from 'react-query'
import * as Yup from 'yup'

import Button from '@/components/button'
import ClientInfo from '@/components/contact-form/client-info'
import ClientDate from '@/components/contact-form/date'
import ClientSuccess from '@/components/contact-form/success'

import api from '@/api-client'
import { useErrorStore } from '@/lib/store/error'
import { customEase1 } from '@/utils'
import {
  ClientInfoForm,
  initialValues as clientInfoInitialValues,
} from './client-info/form-model'
import {
  DemoDateForm,
  initialValues as demoDateInitialValues,
} from './date/form-model'
import { FormData, FormType } from './types'

type Props = {
  formType: FormType
}

const ContactForm = (props: Props) => {
  const [formPhase, setFormPhase] = useState(0)
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const errorStore = useErrorStore()

  const clientInfoFormSchema = Yup.object().shape({
    acceptFromSendingLayers: Yup.boolean().required(),
    acceptKvkk: Yup.boolean().required(),
    companyEmail: Yup.string().email().required(),
    companyName: Yup.string().required(),
    countryCode: Yup.string().required(),
    ...(props.formType === 'service' && {
      interestedProduct: Yup.array().of(Yup.string()).min(1).required(),
    }),
    name: Yup.string().required(),
    note: Yup.string(),
    phone: Yup.string().max(12).required(),
    surname: Yup.string().required(),
    title: Yup.string().required(),
    ...(props.formType === 'demo' && {
      numberOfEmployees: Yup.string().required(),
    }),
    usedHrProduct: Yup.string().required(),
  })

  const demoDateFormSchema = Yup.object().shape({
    demoUserStatus: Yup.string().nullable(),
    demoUserCalendarDto: Yup.object().shape({
      demoUserId: Yup.string().nullable(),
      devDemoUserId: Yup.string().nullable(),
      timezone: Yup.string().required(),
      date: Yup.string().required(),
      time: Yup.string().required(),
    }),
  })

  const clientInfoFormik = useFormik<ClientInfoForm>({
    initialValues: clientInfoInitialValues,
    validationSchema: clientInfoFormSchema,
    validateOnMount: true,
    onSubmit: () => {
      return
    },
  })

  const demoDateFormik = useFormik<DemoDateForm>({
    initialValues: demoDateInitialValues,
    validationSchema: demoDateFormSchema,
    validateOnMount: true,
    onSubmit: () => {
      return
    },
  })

  function handlePrev() {
    if (formPhase < 0) return

    setFormPhase((prev) => {
      return prev - 1
    })
  }

  function handleNext() {
    if (formPhase === 0) {
      clientInfoFormik.submitForm()
    }

    if (formPhase === 1) {
      demoDateFormik.submitForm()
    }

    if (
      Object.keys(clientInfoFormik.errors).length === 0 ||
      Object.keys(demoDateFormik.errors).length === 0
    ) {
      setFormPhase((prev) => (prev + 1) % screens.length)
    }

    const values = {
      ...clientInfoFormik.values,
      ...demoDateFormik.values,
    }

    const vals = {
      ...values,
      formType: props.formType,
      createdDate: '2023-07-20T00:00:00.000Z',
      phone: `${values.countryCode}${values.phone}`,
      interestedProduct: values.interestedProduct?.length
        ? values.interestedProduct.join(',')
        : null,
    }

    delete vals.countryCode

    console.log('vals', vals)

    handleSubmit(vals)
  }

  function handleSubmit(values: any) {
    if (formPhase === screens.length - 1) {
      mutation.mutate(values)
    }
  }

  async function submitForm(values: FormData) {
    const res = await api.post<any>('DemoUser/Create', { ...values })
    return res.data
  }

  const mutation = useMutation(submitForm, {
    onMutate: (variables) => {
      console.log(variables)

      setLoading(true)
    },
    onError: ({ response, message }) => {
      console.log(`error`, response.data.messages.Error)
      errorStore.setMessages(response.data.messages.Error)
    },
    onSuccess: (data) => {
      setResponse(data)
      // errorStore.setMessage(data.message)
    },
    onSettled: () => {
      setLoading(false)
    },
  })

  const screens = [
    <>
      <ClientInfo formType={props.formType} formik={clientInfoFormik} />
    </>,
    <>
      <ClientDate formik={demoDateFormik} />
    </>,
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${formPhase}`}
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          open: {
            opacity: 1,
            transition: { duration: 1, ease: customEase1 },
          },
          closed: {
            opacity: 0,
            transition: { duration: 1, ease: customEase1 },
          },
        }}
      >
        {loading ? (
          <>
            {response ? (
              <ClientSuccess {...response} />
            ) : (
              <div className={cn(s.loading, 'flex-center')}>LOADING</div>
            )}
          </>
        ) : (
          <>
            <div className={s.screensC}>{screens[formPhase]}</div>
            <div className={s.btns}>
              {formPhase !== 0 && (
                <div className={cn(s.prevC, { [s.visible]: formPhase !== 0 })}>
                  <Button text="Preivous" callback={handlePrev} inverted />
                </div>
              )}

              {formPhase !== screens.length - 1 && (
                <div className={s.nextC}>
                  <Button text="Next" callback={handleNext} />
                </div>
              )}

              {formPhase === screens.length - 1 && (
                <div className={s.sendC}>
                  <Button text="Send" callback={handleNext} />
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactForm
