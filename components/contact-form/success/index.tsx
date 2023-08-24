import s from './success.module.scss'

import cn from 'clsx'
import moment from 'moment'
import { Trans, useTranslation } from 'next-i18next'

import CustomImage from '@/components/custom-image'
import { CustomLink } from '@/components/custom-link'
import IconCalendar from '@/components/icons/icon-calendar'
import IconClock from '@/components/icons/icon-clock'
import { Locales } from '@/global'

type Props = {
  date: string
  email: string
  nameSurname: string
  responseName: string
  responseSurName: string
  time: string
  title: string
}

const ClientSuccess = (props: Props) => {
  const { t, i18n } = useTranslation('contactForm')

  const message = {
    en: (
      <>
        Your demo request has been successfully received. We thank you for your
        interest in Layers. Below are the details for our upcoming meeting. If
        you wish to cancel the meeting for any reason, kindly contact us at{' '}
        <CustomLink
          href="mailto:info@layersup.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          info@layersup.com
        </CustomLink>
        .
      </>
    ),
    tr: (
      <>
        Demo talebiniz başarıyla alındı. Layers&apos;a olan ilginiz için
        teşekkür ederiz. Aşağıda yaklaşan toplantımızın detayları bulunmaktadır.
        Herhangi bir nedenle toplantıyı iptal etmek isterseniz, lütfen bize{' '}
        <CustomLink
          href="mailto:info@layersup.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          info@layersup.com
        </CustomLink>{' '}
        adresinden ulaşın.
      </>
    ),
  }

  return (
    <div className={s.success}>
      <div className={s.thanks}>
        <h2>{t('successScreen.thanks')}</h2>
        <p className={s.client}>{props.nameSurname}</p>
        <p>{message[i18n.language as Locales]}</p>
      </div>
      <div className={s.message}>
        <p>{t('successScreen.representative')}</p>
        <div className={s.info}>
          <div className={cn(s.imgC, 'hidden-overflow')}>
            <CustomImage
              alt="Representative"
              height={300}
              src="/img/pinned-1.jpg"
              width={300}
            />
          </div>
          <div className={s.text}>
            <p>
              {props.responseName} {props.responseSurName}
            </p>
            {/* <small> {props.title}</small> */}
          </div>
        </div>
        <div className={s.seperator}></div>
        <div className={s.dateTime}>
          <div className={s.box}>
            <div className={cn(s.iconC, 'flex-center')}>
              <IconCalendar fill="var(--black)" />
            </div>
            {moment(props.date).locale(i18n.language).format('MMM DD, YYYY')}
          </div>
          <div className={s.box}>
            <div className={cn(s.iconC, 'flex-center')}>
              <IconClock fill="var(--black)" />
            </div>
            {props.time} {moment(props.date).format('Z')}
          </div>
        </div>
        <small>
          <Trans
            i18nKey="successScreen.email"
            components={{ strong: <strong /> }}
          >
            {t('successScreen.email')}
          </Trans>
        </small>
      </div>
    </div>
  )
}

export default ClientSuccess
