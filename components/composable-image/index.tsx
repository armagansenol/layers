import { Image } from '@/components/image'
import s from './composable-image.module.scss'

type Props = {
  sources: {
    items: { url: string; title: string }[]
  }
  width?: number
  height?: number
}

export function ComposableImage({ sources, width = 320, height = 320 }: Props) {
  const amount = sources.items.length
  return (
    <div className={s.images}>
      {sources.items.map((source) => (
        <Image
          key={source.url}
          src={source.url}
          alt={source.title}
          width={width / amount}
          height={height}
          className={s.image}
          style={
            {
              '--height': height,
              '--width': width / amount,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
