import Link from 'next/link'
import s from './button.module.scss'

import cn from 'clsx'

import React from 'react'

type Props = {
  text: string
  path: string
}

const Button = ({ text = 'Button Text', path = '/' }: Props) => {
  return (
    <Link href={path} className={cn(s.button, 'cursor-pointer')}>
      <span className={s.text}> {text}</span>
      <span className={s.iconC}>icon</span>
    </Link>
  )
}

export default Button
