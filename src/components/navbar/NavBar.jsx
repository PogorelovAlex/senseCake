import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined"

import MenuList from "./categories/MenuList"
import Hidden from "@material-ui/core/Hidden"
import { Link } from "gatsby"

import Categories from "../navbar/categories/Categories"
import CategoriesRow from "../navbar/categories/CategoriesRow"
import Logo from "../navbar/logo/Logo"


import "./NavBar.scss"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "20px",
  },
  headerMargin: {
    marginBottom: "20px",
  },
}))

function NavBar() {
  const classes = useStyles()
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  return (
    <Grid container Maxwidth="lg" spacing={3}>
      <Grid item xs={3}>
        <Logo />
      </Grid>

      <Grid
        item
        xs={9}
        direction="row"
        justify="flex-end"
        alignItems="baseline"
        className={classes.headerMargin}
      >
        <Hidden smDown>
          {" "}
          <Categories />
        </Hidden>
        <Hidden mdUp>
          <Grid
            item
            xs={12}
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="flex-end"
          >
            <IconButton
              onClick={() => setVisiblePopup(!visiblePopup)}
              className={classes.root}
              aria-label="MenuOutlined"
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Hidden mdUp>
        <Grid  item xs={12}>
          {visiblePopup && (
            <CategoriesRow />
          )}
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default NavBar
