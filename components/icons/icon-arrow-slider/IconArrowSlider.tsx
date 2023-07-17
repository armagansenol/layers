type Props = {
  fill?: string
}

const IconArrowSlider = ({ fill = "#fff" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 6 11">
      <path
        id="Fill-35"
        d="M-218.7-309.836l.8-.764,4.7,4.51,4.7-4.51.8.764-5.5,5.236-5.5-5.236"
        transform="translate(310.6 -207.7) rotate(-90)"
        fill={fill}
      />
    </svg>
  )
}

export default IconArrowSlider
