type Props = {
  fill?: string
}

const IconShare = ({ fill = "#fff" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 12">
      <path
        d="M3.048,7.3a1.8,1.8,0,1,1,0-2.595L8.412,2.022A1.8,1.8,0,1,1,8.952,3.1L3.588,5.781a1.822,1.822,0,0,1,0,.444L8.952,8.91a1.784,1.784,0,1,1-.54,1.075L3.048,7.3Z"
        transform="translate(0 0.006)"
        fill={fill}
      />
    </svg>
  )
}

export default IconShare
