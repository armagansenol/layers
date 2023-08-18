import { useEffect, useState } from 'react'
import s from './home-slider.module.scss'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

import Button from '@/components/button'
import Image from '@/components/image'
import { customEase1 } from '@/utils'

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useTranslation('home')

  const slides = [
    {
      title: t('slider.s1.title'),
      desc: t('slider.s1.desc'),
      img: {
        src: '/img/downtown.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: t('slider.s1.btn.text'),
        path: t('slider.s1.btn.path'),
      },
    },
    {
      title: t('slider.s2.title'),
      desc: t('slider.s2.desc'),
      img: {
        src: '/img/downtown.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: t('slider.s2.btn.text'),
        path: t('slider.s2.btn.path'),
      },
    },
    {
      title: t('slider.s3.title'),
      desc: t('slider.s3.desc'),
      img: {
        src: '/img/downtown.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: t('slider.s3.btn.text'),
        path: t('slider.s3.btn.path'),
      },
    },
    {
      title: t('slider.s4.title'),
      desc: t('slider.s4.desc'),
      img: {
        src: '/img/downtown.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: t('slider.s4.btn.text'),
        path: t('slider.s4.btn.path'),
      },
    },
  ]

  const animationVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05,
        customEase1,
      },
    },
    exit: {
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05,
        customEase1,
      },
    },
  }

  const item = {
    initial: {
      opacity: 0,
      x: -50,
      duration: 6,
      customEase1,
    },
    animate: {
      opacity: 1,
      x: 0,
      duration: 6,
      customEase1,
    },
    exit: {
      opacity: 0,
      x: 50,
      duration: 6,
      customEase1,
    },
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [currentSlide, slides.length])

  function handleNavClick(index: number) {
    if (index === currentSlide) return
    setCurrentSlide(index)
  }

  return (
    <div className={s.slider}>
      <AnimatePresence mode="wait">
        <motion.div
          className={s.text}
          key={`${currentSlide}-text`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animationVariants}
        >
          <motion.h2 variants={item}>{slides[currentSlide].title}</motion.h2>
          <motion.p variants={item}>{slides[currentSlide].desc}</motion.p>
          <motion.div variants={item}>
            <Button
              text={slides[currentSlide].btn.text}
              path={slides[currentSlide].btn.path}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className={cn(s.media, 'hidden-overflow')}>
        <AnimatePresence mode="popLayout">
          <motion.div
            className={s.imgC}
            key={`${currentSlide}-img`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                filter: 'grayscale(0)',
                transition: { duration: 0.3, ease: 'easeInOut' },
              },
              closed: {
                opacity: 0,
                filter: 'grayscale(1)',
                transition: { duration: 0.3, ease: 'easeInOut' },
              },
            }}
          >
            <Image
              alt={slides[currentSlide].img.alt}
              className={s.img}
              height={1000}
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
              priority={currentSlide === 0}
              src={slides[currentSlide].img.src}
              width={1000}
            />
          </motion.div>
        </AnimatePresence>

        <div className={s.nav}>
          <div className={s.items}>
            {slides.map((item, i) => {
              return (
                <div
                  className={cn(s.item, 'cursor-pointer', {
                    [s.active]: i === currentSlide,
                  })}
                  key={i}
                  onClick={() => handleNavClick(i)}
                >
                  <div className={s.bar}>
                    {currentSlide === i && (
                      <AnimatePresence>
                        <motion.div
                          className={s.progress}
                          key={`${currentSlide}_progress`}
                          initial="initial"
                          animate="animate"
                          variants={{
                            initial: {
                              width: 0,
                            },
                            animate: {
                              width: '100%',
                              transition: {
                                duration: 5,
                                ease: 'easeOut',
                              },
                            },
                          }}
                        ></motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                  <div className={s.index}>0{i + 1}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
