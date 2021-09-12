import React from "react";
import SongDetails from "./SongDetails";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 15vw"
  },
  dateText: {
    fontSize: "20px",
    color: "#313a47",
    // border: "1px solid black",
  },
  headingText: {
    fontSize: "20px",
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
          <Grid container>
            <Grid item xs={1}>
              <div className={classes.dateText}>
                {dat.date}
              </div>
            </Grid>
            <Grid item >
              <Typography className={classes.headingText}>{dat.title}</Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails children={<SongDetails noteDat={dat.notes}/>} />
      </Accordion>

    </div>
  )
}
