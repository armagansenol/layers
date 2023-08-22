import { useRef } from 'react'
import s from './card-stack.module.scss'

import cn from 'clsx'
import { useTranslation } from 'next-i18next'

import Button from '@/components/button'
import CustomImage from '@/components/custom-image'
import { features, routes } from '@/global'

const CardStack = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { i18n } = useTranslation()

  const cards = [
    {
      order: 'first',
      path: routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
        .employeeDatabase?.path,
      title:
        routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
          .employeeDatabase?.ui,
      desc: features[i18n.language === 'en' ? 'en' : 'tr'].employeeDatabase
        ?.data.intro.desc,
      small:
        features[i18n.language === 'en' ? 'en' : 'tr'].employeeDatabase?.data
          .intro.small,
    },
    {
      order: 'second',
      path: routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
        .employeeCenterAndHrPortal?.path,
      title:
        routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
          .employeeCenterAndHrPortal?.ui,
      desc: features[i18n.language === 'en' ? 'en' : 'tr']
        .employeeCenterAndHrPortal?.data.intro.desc,
      small:
        features[i18n.language === 'en' ? 'en' : 'tr'].employeeCenterAndHrPortal
          ?.data.intro.small,
    },
    {
      order: 'third',
      path: routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
        .reportingAndHrAnalytics?.path,
      title:
        routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
          .reportingAndHrAnalytics?.ui,
      desc: features[i18n.language === 'en' ? 'en' : 'tr']
        .reportingAndHrAnalytics?.data.intro.desc,
      small:
        features[i18n.language === 'en' ? 'en' : 'tr'].reportingAndHrAnalytics
          ?.data.intro.small,
    },
    {
      order: 'fourth',
      path: routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
        .workflowsAndForms?.path,
      title:
        routes[i18n.language === 'en' ? 'en' : 'tr'].features.children
          .workflowsAndForms?.ui,
      desc: features[i18n.language === 'en' ? 'en' : 'tr'].workflowsAndForms
        ?.data.intro.desc,
      small:
        features[i18n.language === 'en' ? 'en' : 'tr'].workflowsAndForms?.data
          .intro.small,
    },
  ]

  function findEl(elArr: any[], classname: any) {
    const filtered = elArr.filter((el) => {
      return el.classList.contains(classname)
    })

    return filtered[0]
  }

  //TODO: Refactor
  function handleStack(e: any) {
    if (!ref.current) return
    const clickedCard = e.target.closest('[data-card]')

    const cards = Array.from(ref.current.querySelectorAll('[data-card]'))

    const se = findEl(cards, s.second)
    const th = findEl(cards, s.third)
    const fo = findEl(cards, s.fourth)

    if (clickedCard.classList.contains(s.first)) {
      clickedCard.classList.remove(s.first)
      clickedCard.classList.add(s.fourth)

      se?.classList.remove(s.second)
      se?.classList.add(s.first)

      th?.classList.remove(s.third)
      th?.classList.add(s.second)

      fo?.classList.remove(s.fourth)
      fo?.classList.add(s.third)
    }

    if (clickedCard.classList.contains(s.second)) {
      clickedCard.classList.remove(s.second)
      clickedCard.classList.add(s.fourth)

      th?.classList.remove(s.third)
      th?.classList.add(s.second)

      fo?.classList.remove(s.fourth)
      fo?.classList.add(s.third)
    }

    if (clickedCard.classList.contains(s.third)) {
      clickedCard.classList.remove(s.third)
      clickedCard.classList.add(s.fourth)

      fo?.classList.remove(s.fourth)
      fo?.classList.add(s.third)
    }
  }

  return (
    <div className={s.cardStack} ref={ref}>
      <div className={s.cardsC}>
        {cards.map((card, i) => {
          return (
            <div
              className={cn(s.cardC, [s[card.order]])}
              key={i}
              onClick={(e) => handleStack(e)}
              data-card
            >
              <div className={cn(s.transformC, [s[card.order]])}>
                <div className={cn(s.card, [s[card.order]])}>
                  <div className={s.cardHeader}>
                    <h5>{card.title}</h5>
                  </div>
                  <div className={s.cardBody}>
                    <div className={s.mediaC}>
                      <CustomImage
                        alt="Feature App Visual"
                        height={1000}
                        loading="lazy"
                        style={{ objectFit: 'contain' }}
                        src={`/img/cards/c${i + 1}.png`}
                        width={1000}
                      />
                    </div>
                    <div className={s.text}>
                      <p>{card.desc}</p>
                      <small>{card.small}</small>
                      <Button
                        path={`/features/${card.path}`}
                        text="Find Out More"
                      />
                    </div>
                  </div>
                </div>
                <div className={cn(s.iconC, 'hidden-overflow')}>
                  <CustomImage
                    alt="Feature Icon"
                    height={300}
                    loading="lazy"
                    src={`/img/detail/${card.path}/menu-icon.png`}
                    style={{ objectFit: 'contain' }}
                    width={300}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardStack
