import s from './slider-testimonials.module.scss'

import cn from 'clsx'
import { EmblaOptionsType } from 'embla-carousel-react'

import CustomImage from '@/components/custom-image'
import EmblaCarousel from '@/components/embla-carousel'
import { CursorType, useCursorStore } from '@/lib/store/cursor'

const carouselOptions: EmblaOptionsType = {
  slidesToScroll: 1,
  breakpoints: {
    '(min-width: 800px)': { align: 0.1, containScroll: false },
  },
}

type Slide = {
  img: string
  name: string
  role: string
  comment: string
}

function Slide(props: Slide) {
  return (
    <div className={s.slide}>
      <div className={s.info}>
        <div className={s.imgC}>
          <CustomImage
            src={props.img}
            alt="Client Profile Photo"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
        <div className={s.text}>
          <p>{props.name}</p>
          <small>{props.role}</small>
        </div>
      </div>
      <p>{props.comment}</p>
    </div>
  )
}

type Props = {
  slides: Slide[]
}

const SliderTestimonials = (props: Props) => {
  const { setType } = useCursorStore()

  function handleMouseEnter() {
    setType(CursorType.drag)
  }

  function handleMouseLeave() {
    setType(CursorType.default)
  }

  return (
    <div>
      <div
        className={cn(s.sliderTestimonials, 'cursor-hidden')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <EmblaCarousel
          options={carouselOptions}
          slides={props.slides.map((data, i) => {
            return <Slide key={i} {...data} />
          })}
          slideSpacing={30}
        />
      </div>
    </div>
  )
}

export default SliderTestimonials
