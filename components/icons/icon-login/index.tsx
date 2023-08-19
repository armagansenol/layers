type Props = {
  fill?: string
}

const IconLogin = ({ fill = '#fff' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 9 11"
    >
      <path
        id="login_account_enter_door"
        d="M14,2.393V12.607a.4.4,0,0,1-.409.393H5.409A.4.4,0,0,1,5,12.607v-.786h.818v.393h7.364V2.786H5.818V3.964H5V2.393A.4.4,0,0,1,5.409,2h8.182A.4.4,0,0,1,14,2.393ZM7.982,9.185l.581.558,2.045-1.964a.382.382,0,0,0,0-.558L8.563,5.257l-.581.558,1.35,1.292H5v.786H9.332Z"
        transform="translate(-5 -2)"
        fill={fill}
      />
    </svg>
  )
}

export default IconLogin
