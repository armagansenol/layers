import { useState } from 'react'
import s from './image.module.scss'

import cn from 'clsx'
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
  const [loaded, setLoaded] = useState(loading !== 'lazy')

  return (
    <NextImage
      alt={alt}
      src={src}
      className={cn(s.image, className, {
        [s.visible]: loaded,
      })}
      style={{ ...style }}
      loading={loading}
      quality={quality}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  )
}

export default Image
