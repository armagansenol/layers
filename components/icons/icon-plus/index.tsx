import React from 'react'

type Props = {
  fill?: string
}

const IconPlus = ({ fill = '#000' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
    >
      <path
        id="Path_48"
        data-name="Path 48"
        d="M19.44-12.591H11.927V-20.16H8.953v7.569H1.44v2.863H8.953V-2.16h2.975V-9.729H19.44Z"
        transform="translate(-1.44 20.16)"
        opacity="0.8"
        fill={fill}
      />
    </svg>
  )
}

export default IconPlus
