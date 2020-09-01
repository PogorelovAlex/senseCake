import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "20px",
  },
  headerMargin: {
    marginBottom: "20px",
  },
}))

function MenuButton() {
  const classes = useStyles()
  return (
    <div>
      <IconButton className={classes.root} aria-label="MenuOutlined">
        <MenuOutlinedIcon />
      </IconButton>
    </div>
  )
}

export default MenuButton
