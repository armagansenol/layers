import { routes } from '@/global'
import Button from '../button'
import { Image } from '../image'
import s from './card-stack.module.scss'
import cn from 'clsx'
import { useState } from 'react'
import { log } from 'console'

type Props = {}

const CardStack = (props: Props) => {
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
    const clickedEl = e.target

    const cardEls = Array.from(document.querySelectorAll('.cardC'))
    const cardsEl = document.querySelector('.cardsC')

    if (!cardsEl) return

    const fi = findEl(cardEls, s.first)
    const se = findEl(cardEls, s.second)
    const th = findEl(cardEls, s.third)
    const fo = findEl(cardEls, s.fourth)

    if (clickedEl.classList.contains(s.first)) {
      clickedEl.classList.remove(s.first)
      clickedEl.classList.add(s.fourth)

      se?.classList.remove(s.second)
      se?.classList.add(s.first)

      th?.classList.remove(s.third)
      th?.classList.add(s.second)

      fo?.classList.remove(s.fourth)
      fo?.classList.add(s.third)
    }

    if (clickedEl.classList.contains(s.second)) {
      clickedEl.classList.remove(s.second)
      clickedEl.classList.add(s.fourth)

      th?.classList.remove(s.third)
      th?.classList.add(s.second)

      fo?.classList.remove(s.fourth)
      fo?.classList.add(s.third)
    }

    if (clickedEl.classList.contains(s.third)) {
      clickedEl.classList.remove(s.third)
      clickedEl.classList.add(s.fourth)

      fo?.classList.remove(s.fourth)
      fo?.classList.add(s.third)
    }
  }

  return (
    <div className={s.cardStack}>
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
                      <Image
                        src={`/img/cards/c${i + 1}.png`}
                        alt="Detail"
                        width={10000}
                        height={10000}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <div className={s.text}>
                      <p>{card.desc}</p>
                      <small>{card.small}</small>
                      <Button
                        text="Find Out More"
                        path={`/features/${card.path}`}
                      />
                    </div>
                  </div>
                </div>
                <div className={cn(s.iconC, 'hidden-overflow')}>
                  <Image
                    src={`/img/cards/c${i + 1}.png`}
                    alt="Detail"
                    width={10000}
                    height={10000}
                    style={{ objectFit: 'contain' }}
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
