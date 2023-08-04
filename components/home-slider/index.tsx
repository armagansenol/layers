import { useEffect, useState } from 'react'
import s from './home-slider.module.scss'

import { AnimatePresence, motion } from 'framer-motion'
import cn from 'clsx'

import Button from '@/components/button'
import { Image } from '@/components/image'

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: '/img/downtown.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: 'Request a Demo',
        path: '/request-a-demo',
      },
    },
    {
      title: 'Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: '/img/bike.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: 'Request a Demo',
        path: '/request-a-demo',
      },
    },
    {
      title: 'Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: '/img/basketball.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: 'Request a Demo',
        path: '/request-a-demo',
      },
    },
    {
      title: 'Let Layers manage your time.',
      desc: 'Simple, straightforward, reportable, and centralized HR data on a single platform.',
      img: {
        src: '/img/conversation.jpg',
        alt: 'Slide Image',
      },
      btn: {
        text: 'Request a Demo',
        path: '/request-a-demo',
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
        staggerChildren: -0.02,
        ease: 'easeInOut',
      },
    },
    exit: {
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: -0.02,
        ease: 'easeInOut',
      },
    },
  }

  const item = {
    initial: { opacity: 0, x: -50, duration: 1, ease: 'easeInOut' },
    animate: { opacity: 1, x: 0, duration: 1, ease: 'easeInOut' },
    exit: { opacity: 0, x: 50, duration: 1, ease: 'easeInOut' },
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
      <div className={s.text}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentSlide}_text`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}
          >
            <motion.h2 variants={item}>{slides[currentSlide].title}</motion.h2>
            <motion.p variants={item}>{slides[currentSlide].desc}</motion.p>
            <motion.div variants={item} className={s.btnC}>
              <Button
                text={slides[currentSlide].btn.text}
                path={slides[currentSlide].btn.path}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={cn(s.media, 'hidden-overflow')}>
        <AnimatePresence mode="popLayout">
          <motion.div
            className={s.imgC}
            key={`${currentSlide}_img`}
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
              height="1000"
              src={slides[currentSlide].img.src}
              width="1000"
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
                  <div className={s.bar}></div>
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
