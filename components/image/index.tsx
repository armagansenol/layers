import cn from 'clsx'
import NextImage from 'next/image'
import s from './image.module.scss'

type Props = {
  className: string
  style: React.CSSProperties
  src: string
  loading?: 'eager' | 'lazy'
  quality?: number
  alt: string
  [x: string]: any
}

export function Image({
  src = '',
  className,
  style,
  loading = 'eager',
  quality = 100,
  alt = '',
  ...props
}: Props) {
  return (
    <NextImage
      {...props}
      src={src}
      className={cn(s.image, className)}
      style={{ ...style }}
      loading={loading}
      quality={quality}
      alt={alt}
    />
  )
}
