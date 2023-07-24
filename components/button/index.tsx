import Link from 'next/link'
import s from './button.module.scss'

import cn from 'clsx'

import React from 'react'
import IconArrow from '@/components/icons/icon-arrow'

type Props = {
  text: string
  path: string
  size?: 'sm' | 'md' | 'l' | 'xl'
  callback?: (() => void) | null
}

const Button = ({
  text = 'Button Text',
  path = '/',
  size = 'md',
  callback = null,
}: Props) => {
  return (
    <>
      {callback ? (
        <button
          className={cn(s.button, 'cursor-pointer', [s[size]])}
          onClick={callback}
        >
          <span className={s.text}> {text}</span>
          <span className={s.iconC}>
            <div className={s.icon}>
              <IconArrow />
            </div>
          </span>
        </button>
      ) : (
        <Link href={path} className={cn(s.button, 'cursor-pointer', [s[size]])}>
          <span className={s.text}> {text}</span>
          <span className={s.iconC}>
            <div className={s.icon}>
              <IconArrow />
            </div>
          </span>
        </Link>
      )}
    </>
  )
}

export default Button
