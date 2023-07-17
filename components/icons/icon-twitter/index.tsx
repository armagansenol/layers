type Props = {
  fill?: string
}

const IconTwitter = ({ fill = "#fff" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 14 12">
      <path
        d="M17.574,11.746a5.486,5.486,0,0,1-1.65.477,3.012,3.012,0,0,0,1.263-1.676,5.573,5.573,0,0,1-1.824.736,2.8,2.8,0,0,0-2.1-.957,2.954,2.954,0,0,0-2.872,3.03,3.192,3.192,0,0,0,.074.69,8.023,8.023,0,0,1-5.921-3.165A3.141,3.141,0,0,0,4.16,12.4a3.074,3.074,0,0,0,1.278,2.521,2.752,2.752,0,0,1-1.3-.379c0,.013,0,.025,0,.038a3,3,0,0,0,2.3,2.97,2.747,2.747,0,0,1-.757.106,2.7,2.7,0,0,1-.541-.055,2.9,2.9,0,0,0,2.683,2.1,5.575,5.575,0,0,1-3.567,1.3,5.509,5.509,0,0,1-.685-.043,7.825,7.825,0,0,0,4.4,1.361c5.283,0,8.172-4.616,8.172-8.619q0-.2-.008-.392A6,6,0,0,0,17.574,11.746Z"
        transform="translate(-3.574 -10.326)"
        fill={fill}
      />
    </svg>
  )
}

export default IconTwitter
