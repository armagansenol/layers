import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps) {
  const fadeOut = { opacity: 0 }
  const fadeIn = { opacity: 1 }

  const transition = {
    duration: 1,
  }

  return (
    <motion.div
      initial={fadeOut}
      animate={fadeIn}
      exit={fadeOut}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)
