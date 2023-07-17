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
      viewBox="0 0 12 12"
    >
      <path
        id="_216121_calender_icon"
        data-name="216121_calender_icon"
        d="M13.667,5.123V5a2,2,0,1,0-4,0H8.333a2,2,0,1,0-4,0v.123A2,2,0,0,0,3,7v6a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7A2,2,0,0,0,13.667,5.123ZM11,5a.667.667,0,1,1,1.333,0V6.333a.667.667,0,1,1-1.333,0ZM5.667,5A.667.667,0,0,1,7,5V6.333a.667.667,0,1,1-1.333,0Zm8,8a.667.667,0,0,1-.667.667H5A.667.667,0,0,1,4.333,13V9h9.333Z"
        transform="translate(-3 -3)"
        fill={fill}
      />
    </svg>
  )
}

export default IconCalendar
