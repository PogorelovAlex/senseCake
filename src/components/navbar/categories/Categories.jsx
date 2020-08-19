import React from "react"

import MenuList from "./MenuList"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import MenuIcon from "@material-ui/icons/Menu"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

export default function ButtonAppBar() {
  return (
    <MenuList
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
