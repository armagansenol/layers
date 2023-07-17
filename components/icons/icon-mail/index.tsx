type Props = {
  fill?: string
}

const IconMail = ({ fill = "#fff" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 19 15.999">
      <path
        id="_8547122_telegram_plane_icon"
        data-name="8547122_telegram_plane_icon"
        d="M18.962,65.856,16.095,79.433c-.216.958-.78,1.2-1.582.745l-4.369-3.232L8.036,78.981a1.1,1.1,0,0,1-.878.43l.314-4.467,8.1-7.346c.352-.315-.076-.49-.547-.175L5.012,73.752.7,72.4C-.235,72.1-.252,71.456.9,71l16.856-6.52C18.534,64.191,19.217,64.659,18.962,65.856Z"
        transform="translate(-0.016 -64.399)"
        fill={fill}
      />
    </svg>
  )
}

export default IconMail
