type Props = {
  fill?: string
}

const IconFacebook = ({ fill = '#fff' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 9 17"
    >
      <path
        id="facebook-icon"
        d="M26.982,11.6H23.917V9.836a.772.772,0,0,1,.853-.817h2.163V6.106L23.954,6.1c-3.307,0-4.059,2.173-4.059,3.563V11.6H17.982v3h1.912V23.1h4.022V14.6h2.714Z"
        transform="translate(-17.982 -6.096)"
        fill={fill}
      />
    </svg>
  )
}

export default IconFacebook
