import Link from 'next/link'
import s from './button.module.scss'

import cn from 'clsx'

import React from 'react'
import IconArrow from '@/components/icons/icon-arrow'

type Props = {
  text: string
  path: string
  size?: 'sm' | 'md' | 'l' | 'xl'
}

const Button = ({ text = 'Button Text', path = '/', size = 'md' }: Props) => {
  return (
    <Link href={path} className={cn(s.button, 'cursor-pointer', [s[size]])}>
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
