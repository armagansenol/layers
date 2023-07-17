import React from 'react'

type Props = {
  fill?: string
}

const IconMinus = ({ fill = '#000' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 18 2.863"
    >
      <path
        id="Path_47"
        data-name="Path 47"
        d="M19.44-12.591h-18v2.863h18Z"
        transform="translate(-1.44 12.591)"
        opacity="0.8"
        fill={fill}
      />
    </svg>
  )
}

export default IconMinus
