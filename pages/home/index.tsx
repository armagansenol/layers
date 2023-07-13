import React from "react"
import s from "./home.module.scss"
import { Layout } from "@/layouts/default"

type Props = {}

const Home = (props: Props) => {
  return (
    <Layout>
      <section className={s.intro}>intro</section>
    </Layout>
  )
}

export default Home
