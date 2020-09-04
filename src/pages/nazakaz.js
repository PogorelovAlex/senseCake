import React from "react"
import Header from "../components/header/Header"
import Container from "@material-ui/core/Container"
import SwiperCake from "../components/swiper/SwiperCake"
import Album from "../components/album/Album"

import "../components/maincss/styles.scss"


const Nazakaz = () => {
  return ( <Container maxWidth="md">
  <Header />
  <Album />
</Container>)
}

export default Nazakaz
