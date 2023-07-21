import {
  ReactElement,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import s from './slider.module.scss'
import './custom.scss'

import cn from 'clsx'
import Navigation from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'

import 'swiper/css'
// import "swiper/css/navigation"
import IconArrow from '../icons/icon-arrow'

type ResponsiveUnits = {
  d: any
  m: any
}

type Props = {
  items: ReactElement[]
  prevButton?: ReactElement | null
  nextButton?: ReactElement | null
  slidesPerView?: ResponsiveUnits
  spaceBetween?: ResponsiveUnits
  slidesOffsetBefore?: ResponsiveUnits
  slidesOffsetAfter?: ResponsiveUnits
  speed?: number
  loop?: boolean
  freeMode?: boolean
  autoplay?: boolean
  navigationClassNames?: {
    container: string
    prevButton: string
    nextButton: string
  }
  customNavigation?: boolean
}

const Slider = forwardRef(
  (
    {
      items = [],
      // prevButton = null,
      // nextButton = null,
      slidesPerView = {
        d: 3,
        m: 1,
      },
      spaceBetween = {
        d: 3,
        m: 1,
      },
      slidesOffsetAfter = {
        d: 0,
        m: 0,
      },
      slidesOffsetBefore = {
        d: 0,
        m: 0,
      },
      speed = 600,
      loop = false,
      freeMode = false,
      autoplay = false,
      navigationClassNames = {
        container: '',
        prevButton: '',
        nextButton: '',
      },
      customNavigation = false,
    }: Props,
    ref
  ) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    // const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>()
    // const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>()

    const swiperRef = useRef<SwiperCore>()

    function prev() {
      swiperRef.current?.slidePrev()
    }

    function next() {
      swiperRef.current?.slideNext()
    }

    useImperativeHandle(
      ref,
      () => {
        return {
          prev,
          next,
        }
      },
      []
    )

    return (
      <div className={s.slider}>
        <Swiper
          style={{ width: '100%', height: '100%' }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(e: any) => setCurrentSlide(e.activeIndex)}
          slidesPerView={slidesPerView.m}
          spaceBetween={spaceBetween.m}
          slidesOffsetBefore={slidesOffsetBefore.m}
          slidesOffsetAfter={slidesOffsetAfter.m}
          preventInteractionOnTransition={true}
          speed={speed}
          loop={loop}
          freeMode={freeMode}
          autoplay={autoplay}
          navigation={{
            disabledClass: 'hidden',
          }}
          breakpoints={{
            800: {
              spaceBetween: spaceBetween.d,
              slidesPerView: slidesPerView.d,
              slidesOffsetBefore: slidesOffsetBefore.d,
              slidesOffsetAfter: slidesOffsetAfter.d,
            },
          }}
          modules={[Navigation]}
        >
          {Array.isArray(items) &&
            items.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className={s.slide}>{item}</div>
                </SwiperSlide>
              )
            })}
        </Swiper>

        {!customNavigation && (
          <div className={s.navigation}>
            <button
              className={cn(
                s.btnWrapper,
                s.btnPrev,
                navigationClassNames.prevButton,
                {
                  [s.disabled]: currentSlide === 0 && !loop,
                }
              )}
              onClick={prev}
            >
              <div className={cn(s.sliderBtn, s.sliderPrev, 'cursor-pointer')}>
                <IconArrow fill={'var(--kuretake-black-manga)'} />
              </div>
            </button>

            <button
              className={cn(
                s.btnWrapper,
                s.btnNext,
                navigationClassNames.nextButton,
                {
                  [s.disabled]: currentSlide === items.length - 1 && !loop,
                }
              )}
              onClick={next}
            >
              <div className={cn(s.sliderBtn, s.sliderNext, 'cursor-pointer')}>
                <IconArrow fill={'var(--kuretake-black-manga)'} />
              </div>
            </button>
          </div>
        )}
      </div>
    )
  }
)

export default Slider
