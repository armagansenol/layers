import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  const router = useRouter()

  console.log(router)

  return (
    <div className={'flex-center'}>
      <div onClick={() => router.back()}>back</div>
      <div>
        {router?.query?.slug?.length && router.query.slug[0]} /{' '}
        {router?.query?.slug?.length && router.query.slug[1]}
      </div>
    </div>
  )
}

export default Page
