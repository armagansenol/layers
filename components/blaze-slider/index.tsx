import cn from 'clsx'
import { useBlazeSlider } from '@/hooks/use-blaze-slider'

export default function BlazeSlider({
  children,
  slidesToShow = 1,
  draggable = true,
  slideGap = '10px',
  className,
  enableAutoplay = false,
}: any) {
  const elRef: any = useBlazeSlider({
    all: {
      slidesToShow,
      draggable,
      slideGap,
      enableAutoplay,
    },
  })

  return (
    <div className={cn(className, 'blaze-slider')} ref={elRef}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">{children}</div>
        </div>
      </div>
    </div>
  )
}
