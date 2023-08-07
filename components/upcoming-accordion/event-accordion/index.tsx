import s from './project-accordion.module.scss'

import * as Accordion from '@radix-ui/react-accordion'
import cn from 'clsx'

import Button from '@/components/button'
import IconCalendar from '@/components/icons/icon-calendar'
import IconLocation from '@/components/icons/icon-location'
import IconMinus from '@/components/icons/icon-minus'
import IconPlus from '@/components/icons/icon-plus'

type AccordionItem = {
  item: any
  index: number
}

type Props = {
  items: any[]
}

const AccordionItem = ({ item, index }: AccordionItem) => {
  // const [active, setActive] = useState<number | boolean>(0)

  return (
    <Accordion.Item
      value={index.toString()}
      className={cn(s.item, 'cursor-pointer')}
      // onClick={() => {
      //   setActive(active === index ? false : index)
      // }}
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
            <span className={s.iconC}>
              <span className={cn(s.icon, s.minus)}>
                <IconMinus fill={'var(--theme-secondary)'} />
              </span>
              <span className={cn(s.icon, s.plus)}>
                <IconPlus />
              </span>
            </span>
          </>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content className={s['accordion-content']}>
        <div className={s.contentC}>
          {item.info && (
            <ul className={cn(s.info, s.contentItem)}>
              <li className={s.date}>
                <div className={s.iconC}>
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
              <Button {...item.link} />
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
