import React from "react"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"

export default function ButtonAppBar() {
  return (
    <Hidden smDown>
      <IconButton aria-label="MenuOutlined">
        <MenuOutlined />
      </IconButton>
    </Hidden>
  )
}
