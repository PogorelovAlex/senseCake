import React from "react"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "./SwiperCake.scss"
import { makeStyles } from "@material-ui/core/styles"

import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 5,
  },
}))
const SwiperCake = () => {
  const classes = useStyles()
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      updateOnWindowResize={true}
      loop={true}
      effect={"fade"}
      navigation
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={img1} alt="img1" className="swiper-slide " />
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} alt="img2" className="swiper-slide " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img3" className="swiper-slide " />
      </SwiperSlide>
    </Swiper>
  )
}
export default SwiperCake
