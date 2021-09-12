import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
