import Link from 'next/link'
import s from './button.module.scss'

import cn from 'clsx'

import React from 'react'
import IconArrow from '@/components/icons/icon-arrow'

type Props = {
  text: string
  path: string
}

const Button = ({ text = 'Button Text', path = '/' }: Props) => {
  return (
    <Link href={path} className={cn(s.button, 'cursor-pointer')}>
      <span className={s.text}> {text}</span>
      <span className={s.iconC}>
        <div className={s.icon}>
          <IconArrow />
        </div>
      </span>
    </Link>
  )
}

export default Button
