import { useState } from 'react'
import s from './featureList.module.scss'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {}

const FeatureList = (props: Props) => {
  const [currentItem, setCurrentItem] = useState(0)

  const items = [
    {
      title: 'title1',
      text: (
        <>
          <span>text1</span>
        </>
      ),
    },
    {
      title: 'title2',
      text: (
        <>
          <span>
            text2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tenetur quisquam suscipit vero est error veritatis debitis maxime
            qui ex quibusdam, numquam similique! Ullam rerum cumque, soluta,
            nesciunt laboriosam iure odit quas, nihil numquam nulla suscipit
            nostrum ratione quasi possimus ipsam. Perferendis, quidem.
            Provident, fugit suscipit amet, totam excepturi velit esse
            praesentium dolore pariatur necessitatibus blanditiis explicabo
            sequi eum voluptatibus nemo aliquam minima? Vero hic eligendi, earum
            harum atque suscipit distinctio officia, perferendis et, itaque vel
            dolorum expedita sit labore magnam. Unde tenetur optio ipsa nihil
            aspernatur repellendus libero obcaecati repudiandae vitae molestias
            magnam soluta exercitationem, minus sint sapiente assumenda odio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            earum blanditiis, nisi aliquid, maiores odio et quos molestias
            consectetur ut quia. Ex omnis, delectus voluptatem autem ea
            necessitatibus vero!
          </span>
        </>
      ),
    },
    {
      title: 'title3',
      text: (
        <>
          <span>text3</span>
        </>
      ),
    },
    {
      title: 'title4',
      text: (
        <>
          <span>text4</span>
        </>
      ),
    },
  ]

  return (
    <div className={s.featureList}>
      <ul className={s.titles}>
        {items.map((item, i) => {
          return (
            <li
              className={cn(s.title, { [s.active]: currentItem === i })}
              key={i}
              onClick={() => setCurrentItem(i)}
            >
              <h5>{item.title}</h5>
            </li>
          )
        })}
      </ul>
      <AnimatePresence mode="wait">
        <motion.div
          className={s.content}
          key={`${currentItem}`}
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            open: {
              height: 'auto',
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: 'easeInOut', delay: 0.4 },
            },
            closed: {
              height: 0,
              opacity: 0,
              y: 10,
              transition: { duration: 0.2, ease: 'easeInOut' },
            },
          }}
        >
          <h5>{items[currentItem].title}</h5>
          <p>{items[currentItem].text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default FeatureList
