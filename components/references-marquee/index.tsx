import React from 'react'
import s from './references-marquee.module.scss'
import { Marquee } from '../marquee'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  items: { logo: string; url: string }[]
}

const ReferencesMarquee = ({ items = [{ logo: '', url: '' }] }: Props) => {
  return (
    <div className={s.referencesMarquee}>
      <Marquee duration={30} repeat={2}>
        <>
          {items.map((item, i) => {
            return (
              <Link href={item.url} className={s.iconC} key={i}>
                <Image
                  alt="Layers Logo"
                  height={100}
                  src={item.logo}
                  width={100}
                />
              </Link>
            )
          })}
        </>
      </Marquee>
    </div>
  )
}

export default ReferencesMarquee