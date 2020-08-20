import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Hidden from "@material-ui/core/Hidden"
import MenuButton from "./MenuButton"

const useStyles = makeStyles(theme => ({
  root: {
    width: "20%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

export default function SimpleAccordion() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Accordion>
          <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1a-content"
          // id="panel1a-header"
          >
            <MenuButton />
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Hidden>
    </div>
  )
}
