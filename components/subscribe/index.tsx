import React from 'react'

import { useEffect, useState } from 'react'
import s from './subscribe.module.scss'

import api from '@/api'
import axios from 'axios'
import cn from 'clsx'
import { useFormik } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'
import * as Yup from 'yup'
import IconInstagram from '../icons/icon-instagram'

interface ISubscribeFormData {
  email: string
}

type Props = {}

const Subscribe = (props: Props) => {
  const [responseMessage, setResponseMessage] = useState(null)
  const [success, setSuccess] = useState(false)

  const submitForm = async (values: any) => {
    try {
      // 👇️ const data: CreateUserResponse
      const { data } = await api.post<any>('subscribe.php', values, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        // 👇️ error: AxiosError<any, any>
        return error.message
      } else {
        console.log('unexpected error: ', error)
        return 'An unexpected error occurred'
      }
    }
  }

  const subscribeSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
  })

  const subscribeValues: ISubscribeFormData = { email: '' }

  const handleSubmit = async (values: ISubscribeFormData) => {
    console.log(values)
    submitForm(values)
      .then((res) => {
        // console.log("res", res)
        setResponseMessage(res.message)
        if (res.success) {
          setSuccess(true)
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

  const subscribeFormik = useFormik({
    initialValues: subscribeValues,
    validationSchema: subscribeSchema,
    onSubmit: handleSubmit,
    validateOnChange: false,
    validateOnBlur: false,
  })

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (success) {
      subscribeFormik.resetForm()
      timer = setTimeout(() => {
        setResponseMessage(null)
        setSuccess(false)
      }, 8000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [success])

  return (
    <section className={s.subscribeC}>
      <div className={s.social}>
        <a href="" target="blank" rel="noreferrer noopener" className={s.iconC}>
          <IconInstagram fill="var(--black)" />
        </a>
        <a href="" target="blank" rel="noreferrer noopener" className={s.iconC}>
          <IconInstagram fill="var(--black)" />
        </a>
        <a href="" target="blank" rel="noreferrer noopener" className={s.iconC}>
          <IconInstagram fill="var(--black)" />
        </a>
        <a href="" target="blank" rel="noreferrer noopener" className={s.iconC}>
          <IconInstagram fill="var(--black)" />
        </a>
        <a href="" target="blank" rel="noreferrer noopener" className={s.iconC}>
          <IconInstagram fill="var(--black)" />
        </a>
        <a href="" target="blank" rel="noreferrer noopener" className={s.iconC}>
          <IconInstagram fill="var(--black)" />
        </a>
      </div>
      <form
        className={s.subscribe}
        onSubmit={subscribeFormik.handleSubmit}
        id="subscribeForm"
      >
        <div className={s.field}>
          <small className={s.smallTop}>
            <span>Layers evolves constantly, stay up to date..!</span>
          </small>
          <div
            className={cn(s.inputC, {
              [s.required]: subscribeFormik.errors.email,
              [s.disabled]: success,
            })}
          >
            <input
              placeholder="Your email address"
              className={s.input}
              type="email"
              id="email"
              name="email"
              onChange={subscribeFormik.handleChange}
              value={subscribeFormik.values.email}
            />
            <button type="submit" className={cn(s.submitBtn, 'cursor-pointer')}>
              <span>Register</span>
            </button>
          </div>
          <small className={s.smallBottom}>
            <span>
              By subscribing, you’ll receive news, updates and much more.
            </span>
          </small>
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
