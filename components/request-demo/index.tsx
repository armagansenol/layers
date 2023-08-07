import s from './request-demo.module.scss'

import React from 'react'

import Button from '@/components/button'

const RequestDemo = () => {
  return (
    <div className={s.requestDemo}>
      <h2 className={s.title}>
        World’s first <span>employee-centric</span> HR Super app, designed to{' '}
        <span>revolutionize</span> how you manage your human resources.
      </h2>
      <Button {...{ text: 'Get to Know Us', path: '/about' }} size="lg" />
    </div>
  )
}

export default RequestDemo
