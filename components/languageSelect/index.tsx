import { useRouter } from 'next/router'

export default function LanguageSelect() {
  const router = useRouter()

  return (
    <div>
      <select
        onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            undefined,
            { locale: e.target.value }
          )
        }
      >
        <option value="en">en</option>
        <option value="tr">tr</option>
      </select>
    </div>
  )
}
