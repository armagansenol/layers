import { useState } from 'react'
import s from './subscribe.module.scss'

import api from '@/api-client'
import cn from 'clsx'
import { useFormik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'
import moment from 'moment'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useMutation } from 'react-query'
import * as Yup from 'yup'

import IconFacebook from '@/components/icons/icon-facebook'
import IconInstagram from '@/components/icons/icon-instagram'
import IconLinkedin from '@/components/icons/icon-linkedin'
import IconYoutube from '@/components/icons/icon-youtube'
import IconX from '@/components/icons/icon-x'
import { useErrorStore } from '@/lib/store/error'

interface ISubscribeFormData {
  email: string
  date: string
}

const Subscribe = () => {
  const [responseMessage, setResponseMessage] = useState(null)
  const [success, setSuccess] = useState(false)
  const errorStore = useErrorStore()
  const { t } = useTranslation('common')

  const submitForm = async (values: { email: string; date: string }) => {
    const res = await api.post<any>('EmailSubscribe', { ...values })
    return res.data
  }

  const subscribeSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
  })

  const subscribeValues: ISubscribeFormData = {
    email: '',
    date: moment().format(),
  }

  const handleSubmit = (values: ISubscribeFormData) => {
    mutation.mutate(values)
  }

  const subscribeFormik = useFormik({
    initialValues: subscribeValues,
    validationSchema: subscribeSchema,
    onSubmit: handleSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  })

  const mutation = useMutation(submitForm, {
    onMutate: (variables) => {
      console.log(variables)
    },
    onError: ({ response, message }) => {
      console.log(`error`, response.data.messages.Error)
      errorStore.setMessages(response.data.messages.Error)
    },
    onSuccess: (data) => {
      setResponseMessage(data.messageCode)
      subscribeFormik.resetForm()
    },
    onSettled: () => {},
  })

  // useEffect(() => {
  //   let timer: ReturnType<typeof setTimeout>

  //   if (success) {
  //     subscribeFormik.resetForm()
  //     timer = setTimeout(() => {
  //       setResponseMessage(null)
  //       setSuccess(false)
  //     }, 8000)
  //   }

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [success])

  return (
    <section className={s.subscribeC}>
      <div className={s.social}>
        <Link
          href="https://www.instagram.com/layers.hrtech"
          target="blank"
          rel="noreferrer noopener"
          className={cn(s.iconC, 'cursor-pointer')}
        >
          <IconInstagram fill="var(--black)" />
        </Link>
        <Link
          href="https://www.youtube.com/@layers.hrtech"
          target="blank"
          rel="noreferrer noopener"
          className={cn(s.iconC, 'cursor-pointer')}
        >
          <IconYoutube fill="var(--black)" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/layers-hrtech"
          target="blank"
          rel="noreferrer noopener"
          className={cn(s.iconC, 'cursor-pointer')}
        >
          <IconLinkedin fill="var(--black)" />
        </Link>
        <Link
          href="https://www.facebook.com/layers.hrtech"
          target="blank"
          rel="noreferrer noopener"
          className={cn(s.iconC, 'cursor-pointer')}
        >
          <IconFacebook fill="var(--black)" />
        </Link>
        <Link
          href="https://twitter.com/layers_hrtech"
          target="blank"
          rel="noreferrer noopener"
          className={cn(s.iconC, 'cursor-pointer')}
        >
          <IconX fill="var(--black)" />
        </Link>
      </div>

      <form
        className={s.subscribe}
        onSubmit={subscribeFormik.handleSubmit}
        id="subscribeForm"
      >
        <div className={s.field}>
          <small className={s.smallTop}>{t('subscribe.top')}</small>
          <div
            className={cn(s.inputC, {
              [s.required]: subscribeFormik.errors.email,
              [s.disabled]: success,
            })}
          >
            <input
              placeholder={t('subscribe.email')}
              className={s.input}
              type="email"
              id="email"
              name="email"
              onChange={subscribeFormik.handleChange}
              value={subscribeFormik.values.email}
            />
            <button
              type="submit"
              className={cn(s.submitBtn, 'cursor-pointer', 'flex-center')}
            >
              <span>{t('subscribe.send')}</span>
            </button>
          </div>
          <small className={s.smallBottom}>{t('subscribe.bottom')}</small>
        </div>

        <AnimatePresence>
          {responseMessage && (
            <motion.span
              className={s.resp}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {responseMessage}
            </motion.span>
          )}
        </AnimatePresence>
      </form>
    </section>
  )
}

export default Subscribe
