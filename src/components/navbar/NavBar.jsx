import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Hidden from "@material-ui/core/Hidden"
import Categories from "../navbar/categories/Categories"
import Logo from "../navbar/logo/Logo"
import "./NavBar.scss"
import Menu from "./menu/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

function NavBar() {
  const classes = useStyles()
  return (
    <Grid container Maxwidth="lg" spacing={3}>
      <Grid item xs={3}>
        <Logo />
      </Grid>

      <Grid item xs={9} justify="flex-end">
        <Hidden smDown>
          <Categories />
        </Hidden>
        <Menu />
      </Grid>
    </Grid>
  )
}

export default NavBar
