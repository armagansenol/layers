import React from 'react'

type Props = {
  fill?: string
}

const IconCalendar = ({ fill = '#000' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 31 31"
    >
      <path
        id="Path_1278"
        data-name="Path 1278"
        d="M29.667,8.307V8a5,5,0,0,0-10,0H16.333a5,5,0,1,0-10,0v.307A5,5,0,0,0,3,13V28a5.006,5.006,0,0,0,5,5H28a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,29.667,8.307ZM23,8a1.667,1.667,0,1,1,3.333,0v3.333a1.667,1.667,0,1,1-3.333,0ZM9.667,8A1.667,1.667,0,0,1,13,8v3.333a1.667,1.667,0,1,1-3.333,0Zm20,20A1.668,1.668,0,0,1,28,29.667H8A1.668,1.668,0,0,1,6.333,28V18H29.667Zm0-11.667H6.333V13A1.668,1.668,0,0,1,8,11.333a3.333,3.333,0,1,0,6.667,0h6.667a3.333,3.333,0,0,0,6.667,0A1.668,1.668,0,0,1,29.667,13Z"
        fill={fill}
        transform="translate(-2.5 -2.5)"
        // stroke="#f8f8f8"
        // strokeWidth="1"
      />
    </svg>
  )
}

export default IconCalendar
