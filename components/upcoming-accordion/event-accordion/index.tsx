import s from './event-accordion.module.scss'

import * as Accordion from '@radix-ui/react-accordion'
import cn from 'clsx'

import Button from '@/components/button'
import IconCalendar from '@/components/icons/icon-calendar'
import IconLocation from '@/components/icons/icon-location'
import IconMinus from '@/components/icons/icon-minus'
import IconPlus from '@/components/icons/icon-plus'
import { CustomLink } from '@/components/custom-link'

type AccordionItem = {
  item: any
  index: number
}

type Props = {
  items: any[]
}

const AccordionItem = ({ item, index }: AccordionItem) => {
  return (
    <Accordion.Item
      value={index.toString()}
      className={cn(s.item, 'cursor-pointer')}
    >
      <Accordion.Header className={s['accordion-header']} asChild>
        <Accordion.Trigger className={s.trigger}>
          <>
            <p className={s.text}>
              {item.name}{' '}
              <span className={cn(s.date, 'hidden-overflow')}>
                ({item.info.date})
              </span>
            </p>
            <span className={cn(s.iconC, 'flex-center')}>
              <span className={cn(s.icon, s.minus)}>
                <IconMinus fill={'var(--black)'} />
              </span>
              <span className={cn(s.icon, s.plus)}>
                <IconPlus fill={'var(--black)'} />
              </span>
            </span>
          </>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content
        className={cn(s['accordion-content'], 'hidden-overflow')}
      >
        <div className={s.contentC}>
          {item.info && (
            <ul className={cn(s.info, s.contentItem)}>
              <li className={s.date}>
                <div className={cn(s.iconC, 'flex-center')}>
                  <IconCalendar />
                </div>
                {item.info.date}
              </li>
              <li className={s.location}>
                <div className={s.iconC}>
                  <IconLocation />
                </div>
                {item.info.location}
              </li>
            </ul>
          )}

          {item.description && (
            <p className={cn(s.description, s.contentItem)}>
              {item.description}
            </p>
          )}

          {item.link && (
            <div className={s.contentItem}>
              <CustomLink external href={item.link.path}>
                <Button text={item.link.text} />
              </CustomLink>
            </div>
          )}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  )
}

export const EventAccordion = ({ items = [] }: Props) => {
  return (
    <div className={s.accordion}>
      <Accordion.Root type="multiple" className={s['accordion-root']}>
        {items.map((item, i) => (
          <AccordionItem key={i} item={item} index={i} />
        ))}
      </Accordion.Root>
    </div>
  )
}
