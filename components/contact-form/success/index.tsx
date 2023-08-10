import s from './success.module.scss'
import React from 'react'

import cn from 'clsx'

import { Image } from '@/components/image'
import IconClock from '@/components/icons/icon-clock'
import IconCalendar from '@/components/icons/icon-calendar'

type Props = {
  date: string
  email: string
  nameSurname: string
  responseName: string
  responseSurname: string
  time: string
  title: string
}

const ClientSuccess = (props: Props) => {
  return (
    <div className={s.success}>
      <div className={s.thanks}>
        <h2>Thank You!</h2>
        <p>
          Your demo request has been successfully received. We thank you for
          your interest in Layers. Below are the details for our upcoming
          meeting. If you wish to cancel the meeting for any reason, kindly
          contact us at{' '}
          <a
            href="mailto:info@layersup.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            info@layersup.com
          </a>
          .
        </p>
      </div>
      <div className={s.message}>
        <p>The person who will get in touch with you</p>
        <div className={s.info}>
          <div className={cn(s.imgC, 'hidden-overflow')}>
            <Image
              alt="Your alt text"
              height={300}
              src="/img/pinned-1.jpg"
              width={300}
            />
          </div>
          <div className={s.text}>
            <p>{props.nameSurname}</p>
            <small> {props.title}</small>
          </div>
        </div>
        <div className={s.seperator}></div>
        <div className={s.dateTime}>
          <div className={s.box}>
            <div className={cn(s.iconC, 'flex-center')}>
              <IconCalendar fill="var(--black)" />
            </div>
            {props.date}
          </div>
          <div className={s.box}>
            <div className={cn(s.iconC, 'flex-center')}>
              <IconClock fill="var(--black)" />
            </div>
            {props.time}
          </div>
        </div>
        <small>
          In the upcoming days, we will also send you the{' '}
          <strong> online meeting link via email.</strong>
        </small>
      </div>
    </div>
  )
}

export default ClientSuccess
