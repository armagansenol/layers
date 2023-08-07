type Props = {
  fill?: string
}

const IconClock = ({ fill = '#fff' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
    >
      <path
        id="Path_1279"
        data-name="Path 1279"
        d="M6264,15a15,15,0,1,1,15,15A15,15,0,0,1,6264,15Zm2,0a13,13,0,1,0,13-13A13,13,0,0,0,6266,15Zm12.289.711A1.006,1.006,0,0,1,6278,15V7h2v7.59l4.66,4.649-1.42,1.42Z"
        transform="translate(-6264)"
        fill={fill}
      />
    </svg>
  )
}

export default IconClock
