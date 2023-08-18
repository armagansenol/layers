import { useState } from 'react'
import s from './image.module.scss'

import cn from 'clsx'
import { motion } from 'framer-motion'
import NextImage from 'next/image'

type Props = {
  className?: string
  style?: React.CSSProperties
  src: string
  loading?: 'eager' | 'lazy'
  quality?: number
  alt: string
  [x: string]: any
}

const Image = ({
  src = '',
  className,
  style,
  loading = 'eager',
  quality = 100,
  alt = '',
  ...props
}: Props) => {
  const animationVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <motion.div
        initial={'hidden'}
        animate={loaded ? 'visible' : 'hidden'}
        variants={animationVariants}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <NextImage
          {...props}
          src={src}
          className={cn(s.image, className)}
          style={{ ...style }}
          loading={loading}
          quality={quality}
          alt={alt}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
    </>
  )
}

export default Image
