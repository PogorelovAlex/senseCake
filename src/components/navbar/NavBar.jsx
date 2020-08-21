import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined"
import Hidden from "@material-ui/core/Hidden"


import Categories from "../navbar/categories/Categories"
import Logo from "../navbar/logo/Logo"
import Menu from "./menu/Menu"

import "./NavBar.scss"



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
        <Menu />
      </Grid>
      
        <Grid item xs={9} 
        direction="row"
        justify="flex-end"
        alignItems="baseline">
         <Hidden smDown> <Categories />
         </Hidden>
        <Hidden mdUp>
          <Grid item xs={12} 
          container
         direction="row-reverse"
         justify="flex-start"
         alignItems="flex-end">
           
           <IconButton aria-label="MenuOutlined">
        <MenuOutlinedIcon />
      </IconButton> </Grid>
      </Hidden>
       </Grid>
      
    </Grid>
  )
}

export default NavBar
