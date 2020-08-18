import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header/Header"
import Container from "@material-ui/core/Container"
import SwiperCake from "../components/swiper/SwiperCake"
import Album from "../components/album/Album"

import "../components/maincss/styles.scss"

export default function Home() {
  return (
    <Container maxWidth="md">
      <Header />
      <SwiperCake />
      <Album />
    </Container>
  )
}
