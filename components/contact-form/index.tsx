import s from './contact-form.module.scss'
import { useState } from 'react'

import cn from 'clsx'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'
import Button from '@/components/button'

type Props = {
  formType: 'contact' | 'demo' | 'service'
}

const contactFormModel = {
  name: {
    placeholder: 'Name',
    name: 'name',
    default: '',
    required: true,
  },
  surname: {
    placeholder: 'Surname',
    name: 'surname',
    default: '',
    required: true,
  },
  companyName: {
    placeholder: 'Company Name',
    name: 'companyName',
    default: '',
    required: true,
  },
  title: {
    placeholder: 'Title',
    name: 'title',
    default: '',
    required: true,
  },
  numberOfEmployees: {
    placeholder: 'Number of Employees',
    name: 'numberOfEmployees',
    default: '',
    required: true,
  },
  interestedProduct: {
    placeholder: 'Interested Product',
    name: 'interestedProduct',
    default: '',
    required: true,
  },
  phone: {
    placeholder: 'Phone',
    name: 'phone',
    default: '',
    required: true,
  },
  note: {
    placeholder: 'Message',
    name: 'note',
    default: '',
    required: true,
  },
  companyEmail: {
    placeholder: 'Company Email',
    name: 'companyEmail',
    default: '',
    required: true,
  },
  acceptKvkk: {
    placeholder: 'Kvkk',
    name: 'acceptKvkk',
    default: '',
    required: true,
  },
  acceptFromSendingLayers: {
    placeholder: 'Accept From Sending Layers',
    name: 'acceptFromSendingLayers',
    default: '',
    required: true,
  },
  formType: 'demo',
  usedHrProduct: {
    placeholder: 'Hr Products Used',
    name: 'usedHrProduct',
    default: '',
    required: true,
  },
  demoUserStatus: {
    placeholder: 'Demo User Status',
    name: 'demoUserStatus',
    default: '',
    required: true,
  },
  demoUserCalendarDto: {
    demoUserId: {
      placeholder: 'Demo User Id',
      name: 'demoUserId',
      default: '',
      required: true,
    },
    devDemoUserId: {
      placeholder: 'Dev Demo User Id',
      name: 'devDemoUserId',
      default: '',
      required: true,
    },
    timezone: {
      placeholder: 'Timezone',
      name: 'timezone',
      default: '',
      required: true,
    },
    date: {
      placeholder: 'Date',
      name: 'date',
      default: '',
      required: true,
    },
    time: {
      placeholder: 'Time',
      name: 'time',
      default: '',
      required: true,
    },
    createdDate: 'date',
  },
}

interface ContactFormData {
  name: string
  surname: string
  companyName: string
  title: string
  numberOfEmployees: string
  interestedProduct: string
  phone: string
  note: string
  companyEmail: string
  acceptKvkk: boolean
  acceptFromSendingLayers: boolean
  formType: string
  usedHrProduct: string
  demoUserStatus: string
  demoUserCalendarDto: {
    demoUserId: string
    devDemoUserId: string
    timezone: string
    date: string
    time: string
  }
  createdDate: string
}

const ContactForm = (props: Props) => {
  const ease = cubicBezier(0.16, 1, 0.3, 1)
  const [formPhase, setFormPhase] = useState<'form' | 'date' | 'success'>(
    'form'
  )

  const contactValues: ContactFormData = {
    name: '',
    surname: '',
    companyName: '',
    title: '',
    numberOfEmployees: '',
    interestedProduct: '',
    phone: '',
    note: '',
    companyEmail: '',
    acceptKvkk: false,
    acceptFromSendingLayers: false,
    formType: '',
    usedHrProduct: '',
    demoUserStatus: '',
    demoUserCalendarDto: {
      demoUserId: '',
      devDemoUserId: '',
      timezone: '',
      date: '',
      time: '',
    },
    createdDate: '',
  }

  const contactSchema = Yup.object().shape({
    name: Yup.string().required('Please fill in the field.'),
    surname: Yup.string().required('Please fill in the field.'),
    companyName: Yup.string().required('Please fill in the field.'),
    title: Yup.string().required('Please fill in the field.'),
    ...(props.formType === 'demo' && {
      numberOfEmployees: Yup.string().required('Please fill in the field.'),
    }),
    ...(props.formType === 'service' && {
      interestedProduct: Yup.string().required('Please fill in the field.'),
    }),
    phone: Yup.string().required('Please fill in the field.'),
    note: Yup.string().required('Please fill in the field.'),
    companyEmail: Yup.string().required('Please fill in the field.'),
    acceptKvkk: Yup.boolean().required('Please fill in the field.'),
    acceptFromSendingLayers: Yup.boolean().required(
      'Please fill in the field.'
    ),
    formType: Yup.string().required('Please fill in the field.'),
    usedHrProduct: Yup.string().required('Please fill in the field.'),
    demoUserStatus: Yup.string().required('Please fill in the field.'),
    demoUserCalendarDto: Yup.object().shape({
      demoUserId: Yup.string().required('Please fill in the field.'),
      devDemoUserId: Yup.string().required('Please fill in the field.'),
      timezone: Yup.string().required('Please fill in the field.'),
      date: Yup.string().required('Please fill in the field.'),
      time: Yup.string().required('Please fill in the field.'),
    }),
    createdDate: Yup.string().required('Please fill in the field.'),
  })

  const contactFormik = useFormik({
    initialValues: contactValues,
    validationSchema: contactSchema,
    onSubmit: (values, { validateForm }) => {
      validateForm(values)
    },
    validateOnMount: true,
  })

  function handlePrev() {
    console.log('prev')
  }

  function handleNext() {
    console.log('next')
    contactFormik.submitForm().then((err) => {
      console.log('profile validated', err)
    })
  }

  // function handleNavigation(direction: "NEXT" | "PREV") {
  //   gsap.to(formRef.current, {
  //     autoAlpha: 0,
  //     duration: 0.2,
  //     onComplete: () => {
  //       switch (direction) {
  //         case "NEXT":
  //           setCurrentStep((prev) => prev + 1)
  //           break
  //         case "PREV":
  //           if (currentStep > 0) {
  //             setCurrentStep((prev) => Math.max(prev - 1, 0))
  //           }
  //           break
  //         default:
  //           break
  //       }
  //       gsap.to(formRef.current, {
  //         autoAlpha: 1,
  //         duration: 0.6,
  //         delay: 0.4,
  //       })
  //     },
  //   })
  // }

  // function handleSubmit(values: any) {
  //   if (currentStep === steps.length - 1) {
  //     if (!privacyNotice) return

  //     submitForm(values).then((res) => {
  //       if (res.success) {
  //         setEnd(true)
  //       } else {
  //         setError(res.message)
  //       }
  //     })
  //   } else {
  //     handleNavigation("NEXT")
  //   }
  // }

  const screens = {
    form: (
      <div className={s.phase1}>
        <div className={s.contactForm}>
          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.name && contactFormik.touched.name,
                })}
              >
                <input
                  placeholder={contactFormModel.name.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.name.name}
                  name={contactFormModel.name.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.name}
                />
              </div>
            </div>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.surname &&
                    contactFormik.touched.surname,
                })}
              >
                <input
                  placeholder={contactFormModel.surname.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.surname.name}
                  name={contactFormModel.surname.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.surname}
                />
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.companyName &&
                    contactFormik.touched.companyName,
                })}
              >
                <input
                  placeholder={contactFormModel.companyName.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.companyName.name}
                  name={contactFormModel.companyName.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.companyName}
                />
              </div>
            </div>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.title && contactFormik.touched.title,
                })}
              >
                <input
                  placeholder={contactFormModel.title.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.title.name}
                  name={contactFormModel.title.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.title}
                />
              </div>
            </div>
          </div>

          {props.formType === 'demo' && (
            <div className={s.row}>
              <div className={s.field}>
                <div
                  className={cn(s.inputC, {
                    [s.required]:
                      contactFormik.errors.numberOfEmployees &&
                      contactFormik.touched.numberOfEmployees,
                  })}
                >
                  <input
                    placeholder={contactFormModel.numberOfEmployees.placeholder}
                    className={s.input}
                    type="text"
                    id={contactFormModel.numberOfEmployees.name}
                    name={contactFormModel.numberOfEmployees.name}
                    onChange={contactFormik.handleChange}
                    value={contactFormik.values.numberOfEmployees}
                  />
                </div>
              </div>
            </div>
          )}

          {props.formType === 'service' && (
            <div className={s.row}>
              <div className={s.field}>
                <div
                  className={cn(s.inputC, {
                    [s.required]:
                      contactFormik.errors.interestedProduct &&
                      contactFormik.touched.interestedProduct,
                  })}
                >
                  <input
                    placeholder={contactFormModel.interestedProduct.placeholder}
                    className={s.input}
                    type="text"
                    id={contactFormModel.interestedProduct.name}
                    name={contactFormModel.interestedProduct.name}
                    onChange={contactFormik.handleChange}
                    value={contactFormik.values.interestedProduct}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.phone && contactFormik.touched.phone,
                })}
              >
                <input
                  placeholder={contactFormModel.phone.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.phone.name}
                  name={contactFormModel.phone.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.phone}
                />
              </div>
            </div>

            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.companyEmail &&
                    contactFormik.touched.companyEmail,
                })}
              >
                <input
                  placeholder={contactFormModel.companyEmail.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.companyEmail.name}
                  name={contactFormModel.companyEmail.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.companyEmail}
                />
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.usedHrProduct &&
                    contactFormik.touched.usedHrProduct,
                })}
              >
                <input
                  placeholder={contactFormModel.usedHrProduct.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.usedHrProduct.name}
                  name={contactFormModel.usedHrProduct.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.usedHrProduct}
                />
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, s.textarea, {
                  [s.required]:
                    contactFormik.errors.note && contactFormik.touched.note,
                })}
              >
                <textarea
                  placeholder={contactFormModel.note.placeholder}
                  className={s.input}
                  id={contactFormModel.note.name}
                  name={contactFormModel.note.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.note}
                />
              </div>
            </div>
          </div>

          <div
            className={cn(s.confirmation, 'cursor-pointer', {
              [s.required]:
                contactFormik.errors.acceptKvkk &&
                contactFormik.touched.acceptKvkk,
            })}
            onClick={() => {
              console.log('1')

              contactFormik.setFieldValue(
                contactFormModel.acceptKvkk.name,
                !contactFormik.values.acceptKvkk
              )
            }}
          >
            <div className={cn(s.checkbox)}>
              <div
                className={cn(s.fill, {
                  [s.visible]: contactFormik.values.acceptKvkk,
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
              [s.required]:
                contactFormik.errors.acceptFromSendingLayers &&
                contactFormik.touched.acceptFromSendingLayers,
            })}
            onClick={() => {
              console.log('2')

              contactFormik.setFieldValue(
                contactFormModel.acceptFromSendingLayers.name,
                !contactFormik.values.acceptFromSendingLayers
              )
            }}
          >
            <div className={cn(s.checkbox)}>
              <div
                className={cn(s.fill, {
                  [s.visible]: contactFormik.values.acceptFromSendingLayers,
                })}
              ></div>
            </div>
            <div className={s.legalText}>
              <small className={s.small}>
                Send me emails with news, insights and event invitations.
              </small>
            </div>
          </div>

          <div className={s.btns}>
            <Button text="Preivous" path="/" callback={handlePrev} />

            <Button text="Nexts" path="/" callback={handleNext} />
          </div>
        </div>
      </div>
    ),
    date: (
      <div className={s.phase2}>
        <div className={s.btns}>
          <Button text="Preivous" path="/" callback={handlePrev} />

          <Button text="Nexts" path="/" callback={handleNext} />
        </div>
      </div>
    ),
    success: <div>success</div>,
  }

  return (
    <div className={s.formC}>
      <AnimatePresence mode="wait">
        {formPhase && (
          <motion.div
            key={`${formPhase}`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                transition: { duration: 1, ease },
              },
              closed: {
                opacity: 0,
                transition: { duration: 1, ease },
              },
            }}
          >
            {screens[formPhase]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* <div className={s.phase1}>
        <div className={s.contactForm}>
          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.name && contactFormik.touched.name,
                })}
              >
                <input
                  placeholder={contactFormModel.name.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.name.name}
                  name={contactFormModel.name.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.name}
                />
              </div>
            </div>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.surname &&
                    contactFormik.touched.surname,
                })}
              >
                <input
                  placeholder={contactFormModel.surname.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.surname.name}
                  name={contactFormModel.surname.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.surname}
                />
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.companyName &&
                    contactFormik.touched.companyName,
                })}
              >
                <input
                  placeholder={contactFormModel.companyName.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.companyName.name}
                  name={contactFormModel.companyName.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.companyName}
                />
              </div>
            </div>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.title && contactFormik.touched.title,
                })}
              >
                <input
                  placeholder={contactFormModel.title.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.title.name}
                  name={contactFormModel.title.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.title}
                />
              </div>
            </div>
          </div>

          {props.formType === 'demo' && (
            <div className={s.row}>
              <div className={s.field}>
                <div
                  className={cn(s.inputC, {
                    [s.required]:
                      contactFormik.errors.numberOfEmployees &&
                      contactFormik.touched.numberOfEmployees,
                  })}
                >
                  <input
                    placeholder={contactFormModel.numberOfEmployees.placeholder}
                    className={s.input}
                    type="text"
                    id={contactFormModel.numberOfEmployees.name}
                    name={contactFormModel.numberOfEmployees.name}
                    onChange={contactFormik.handleChange}
                    value={contactFormik.values.numberOfEmployees}
                  />
                </div>
              </div>
            </div>
          )}

          {props.formType === 'service' && (
            <div className={s.row}>
              <div className={s.field}>
                <div
                  className={cn(s.inputC, {
                    [s.required]:
                      contactFormik.errors.interestedProduct &&
                      contactFormik.touched.interestedProduct,
                  })}
                >
                  <input
                    placeholder={contactFormModel.interestedProduct.placeholder}
                    className={s.input}
                    type="text"
                    id={contactFormModel.interestedProduct.name}
                    name={contactFormModel.interestedProduct.name}
                    onChange={contactFormik.handleChange}
                    value={contactFormik.values.interestedProduct}
                  />
                </div>
              </div>
            </div>
          )}

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.phone && contactFormik.touched.phone,
                })}
              >
                <input
                  placeholder={contactFormModel.phone.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.phone.name}
                  name={contactFormModel.phone.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.phone}
                />
              </div>
            </div>

            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.companyEmail &&
                    contactFormik.touched.companyEmail,
                })}
              >
                <input
                  placeholder={contactFormModel.companyEmail.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.companyEmail.name}
                  name={contactFormModel.companyEmail.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.companyEmail}
                />
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, {
                  [s.required]:
                    contactFormik.errors.usedHrProduct &&
                    contactFormik.touched.usedHrProduct,
                })}
              >
                <input
                  placeholder={contactFormModel.usedHrProduct.placeholder}
                  className={s.input}
                  type="text"
                  id={contactFormModel.usedHrProduct.name}
                  name={contactFormModel.usedHrProduct.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.usedHrProduct}
                />
              </div>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.field}>
              <div
                className={cn(s.inputC, s.textarea, {
                  [s.required]:
                    contactFormik.errors.note && contactFormik.touched.note,
                })}
              >
                <textarea
                  placeholder={contactFormModel.note.placeholder}
                  className={s.input}
                  id={contactFormModel.note.name}
                  name={contactFormModel.note.name}
                  onChange={contactFormik.handleChange}
                  value={contactFormik.values.note}
                />
              </div>
            </div>
          </div>

          <div
            className={cn(s.confirmation, 'cursor-pointer')}
            onClick={() => {
              contactFormik.setFieldValue(
                'acceptKvkk',
                !contactFormik.values.acceptKvkk
              )
            }}
          >
            <div className={s.checkbox}>
              <div
                className={cn(s.fill, {
                  [s.enabled]: contactFormik.values.acceptKvkk,
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
            className={cn(s.confirmation, 'cursor-pointer')}
            onClick={() => {
              contactFormik.setFieldValue(
                'acceptFromSendingLayers',
                !contactFormik.values.acceptFromSendingLayers
              )
            }}
          >
            <div className={s.checkbox}>
              <div
                className={cn(s.inner, {
                  [s.enabled]: contactFormik.values.acceptFromSendingLayers,
                })}
              ></div>
            </div>
            <div className={s.legalText}>
              <small className={s.small}>
                Send me emails with news, insights and event invitations.
              </small>
            </div>
          </div>

          <Button text="Send" path="/" />
        </div>
      </div>

      <div className={s.phase2}>phase2</div> */}
    </div>
  )
}

export default ContactForm
