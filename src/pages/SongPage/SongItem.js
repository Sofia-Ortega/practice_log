import React from "react";
import SongDetails from "./SongDetails";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 15vw"
  },
  heading: {
    fontSize: "20px",
    fontWeight: "700px",
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  subHeading: {
    textDecoration: "underline",

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


export default function SongItem({dat}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>{dat.title}</Typography>
        </AccordionSummary>
        <AccordionDetails children={<SongDetails noteDat={dat.notes}/>} />
      </Accordion>

    </div>
  )
}
