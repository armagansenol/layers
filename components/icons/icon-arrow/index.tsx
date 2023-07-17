type Props = {
  fill?: string
}

const IconArrow = ({ fill = '#000' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 16.88 8.44"
    >
      <path
        id="Path_52"
        data-name="Path 52"
        d="M6.907,16.976a.562.562,0,0,0,0-.816L4.134,13.5h14.2a.579.579,0,1,0,0-1.157H4.152L6.907,9.7a.566.566,0,0,0,0-.824.626.626,0,0,0-.859,0L2.216,12.562a.506.506,0,0,0,0,.735l3.835,3.68a.621.621,0,0,0,.856,0Z"
        transform="translate(18.938 17.147) rotate(180)"
        fill={fill}
      />
    </svg>
  )
}

export default IconArrow
