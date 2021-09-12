import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SongItems from "./SongItems";
import Header from "../../components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const data = [
  {
    title: "what a day",
    notes: "it's a nice song"
  },
  {
    title: "kryptonite",
    notes: "superman's greatest weakness"
  },
  {
    title: "my best performance",
    notes: "this is literally perfect"
  }
]


export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={"Song"} />
      <SongItems data={data}  />
    </div>
  );
}
