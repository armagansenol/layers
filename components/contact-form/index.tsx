import { useState } from 'react'
import s from './contact-form.module.scss'

import { AnimatePresence, cubicBezier, motion } from 'framer-motion'

import ClientInfo from './client-info'
import ClientDate from './date'
import ClientSuccess from './success'
import Button from '../button'

type Props = {
  formType: 'contact' | 'demo' | 'service'
}

const ease = cubicBezier(0.16, 1, 0.3, 1)

const ContactForm = (props: Props) => {
  const [formPhase, setFormPhase] = useState(0)

  function handlePrev() {
    console.log('prev')
    if (formPhase < 0) return
    setFormPhase((prev) => {
      return prev - 1
    })
  }

  function handleNext() {
    console.log('next')
    setFormPhase((prev) => {
      return prev + (1 % Object.keys(screens).length)
    })
    // contactFormik.submitForm().then((err) => {
    //   console.log('profile validated', err)
    // })
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

  const screens = [
    <>
      <ClientInfo formType contactFormik />
    </>,
    <>
      <ClientDate />
    </>,
    <>
      <ClientSuccess />
    </>,
  ]

  return (
    <div className={s.formC}>
      <AnimatePresence mode="wait">
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

          {formPhase !== screens.length - 1 && (
            <div className={s.btns}>
              {formPhase !== 0 && (
                <Button text="Preivous" path="/" callback={handlePrev} />
              )}
              <Button text="Nexts" path="/" callback={handleNext} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ContactForm
