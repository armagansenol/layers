import { useRef, useState } from 'react'
import s from './card-stack.module.scss'

import cn from 'clsx'

import Button from '@/components/button'
import CustomImage from '@/components/custom-image'
import { routes } from '@/global'

const CardStack = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const cards = [
    {
      order: 'first',
      path: routes.features.children.employeeDatabase?.path,
      title: routes.features.children.employeeDatabase?.ui,
      desc: 'You can access your personal database with just a click.',
      small:
        'You can easily manage, monitor and report your organizational chart, personnel personal information, documents and personal information.',
    },
    {
      order: 'second',
      path: routes.features.children.employeeCenterAndHrPortal?.path,
      title: routes.features.children.employeeCenterAndHrPortal?.ui,
      desc: 'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
      small:
        'Simplify employee needs with a centralized web/mobile center for leave, expenses, and more.',
    },
    {
      order: 'third',
      path: routes.features.children.reportingAndHrAnalytics?.path,
      title: routes.features.children.reportingAndHrAnalytics?.ui,
      desc: 'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
      small:
        'Effortlessly track your workforce with 50+ reports and AI-powered analytics.',
    },
    {
      order: 'fourth',
      path: routes.features.children.workflowsAndForms?.path,
      title: routes.features.children.workflowsAndForms?.ui,
      desc: 'Effortlessly manage 10+ processes and tasks.',
      small:
        'Automate processes, eliminate manual tasks, and enhance collaboration, all in one comprehensive solution.',
    },
  ]

  function findEl(elArr: any[], classname: any) {
    const filtered = elArr.filter((el) => {
      return el.classList.contains(classname)
    })

    return filtered[0]
  }

  function handleStack(e: any) {
    if (!ref.current) return
    const clickedCard = e.target.closest('.cardC')

    const cards = Array.from(ref.current.querySelectorAll('.cardC'))

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
      <div className={cn(s.cardsC, 'cardsC')}>
        {cards.map((card, i) => {
          return (
            <div
              className={cn(s.cardC, 'cardC', [s[card.order]], {
                [s.active]: i === activeItem,
              })}
              key={i}
              onClick={(e) => handleStack(e)}
              // onMouseEnter={() => setActiveItem(i)}
              // onMouseLeave={() => setActiveItem(null)}
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
