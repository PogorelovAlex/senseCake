import React from "react"
import MenuList from "./MenuList"
import { Link } from "gatsby"

export default function Categories() {
  return (
    <MenuList
    onClickItem ={(name)=>console.log(name)}
      item={[
        "Контакты",
        "О нас",
        "Кафе",
        "Торты на заказ",
        "Начинки",
        "Главная",
      ]} 
    />
  )
}
