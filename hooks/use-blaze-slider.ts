import BlazeSlider from 'blaze-slider'
import React from 'react'

export function useBlazeSlider(config: any) {
  const sliderRef = React.useRef<any>()
  const elRef = React.useRef<any>()

  React.useEffect(() => {
    // if not already initialized
    if (!sliderRef.current) {
      sliderRef.current = new BlazeSlider(elRef.current, config)
    }
  }, [])

  return elRef
}
