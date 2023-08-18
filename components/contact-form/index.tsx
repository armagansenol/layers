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
import { customEase1 } from '@/utils'
import {
  ClientInfoForm,
  initialValues as clientInfoInitialValues,
} from './form-model/client-info-form'
import {
  DemoDateForm,
  initialValues as demoDateInitialValues,
} from './form-model/demo-date-form'
import { FormData, FormType } from './types'
import { AxiosError } from 'axios'
import { useErrorStore } from '@/lib/errorStore'

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
    ...(props.formType === 'service' && {
      interestedProduct: Yup.string().required(),
    }),
    name: Yup.string().required(),
    note: Yup.string(),
    phone: Yup.string().required(),
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

  function validate() {
    clientInfoFormik.submitForm()
    demoDateFormik.submitForm()
  }

  function handlePrev() {
    if (formPhase < 0) return

    setFormPhase((prev) => {
      return prev - 1
    })
  }

  function handleNext() {
    validate()

    if (Object.keys(clientInfoFormik.errors).length && formPhase === 0) {
      return
    }

    if (Object.keys(demoDateFormik.errors).length && formPhase === 1) {
      return
    }

    setFormPhase((prev) => (prev + 1) % screens.length)

    const values = {
      ...clientInfoFormik.values,
      ...demoDateFormik.values,
      formType: props.formType,
      createdDate: moment().format(),
    }

    handleSubmit(values)
  }

  function handleSubmit(values: any) {
    if (formPhase === screens.length - 1) {
      console.log('submit to server')
      mutation.mutate(values)
    }
  }

  async function submitForm(values: FormData) {
    const res = await api.post<any>('DemoUser/Create', { ...values })
    return res.data
  }

  const mutation = useMutation(submitForm, {
    onMutate: (variables) => {
      console.log('variables', variables)
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
              <div className={cn(s.prevC, { [s.visible]: formPhase !== 0 })}>
                <Button
                  text="Preivous"
                  path="/"
                  callback={handlePrev}
                  inverted
                />
              </div>
              <div className={s.nextC}>
                <Button text="Next" path="/" callback={handleNext} />
              </div>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactForm
