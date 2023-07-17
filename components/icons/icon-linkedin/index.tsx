type Props = {
  fill?: string
}

const IconLinkedin = ({ fill = "#fff" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23 23">
      <path
        d="M17.4,22V13.45a2.439,2.439,0,0,0-2.6-2.517,2.244,2.244,0,0,0-2.046,1.147,5.985,5.985,0,0,0-.42,2.962v6.891h-4.6V7.267h4.4V9.229a3.2,3.2,0,0,1,.2-.287,5.365,5.365,0,0,1,4.533-2.075c.181.007.36.021.533.04,2.935.317,4.6,2.253,4.6,5.526V22ZM.367,21.9V7.234h4.6V21.9ZM0,2.667A2.667,2.667,0,1,1,2.666,5.333,2.667,2.667,0,0,1,0,2.667Z"
        transform="translate(0.5 0.5)"
        fill={fill}
        stroke="rgba(0,0,0,0)"
        strokeWidth="1"
      />
    </svg>
  )
}

export default IconLinkedin
