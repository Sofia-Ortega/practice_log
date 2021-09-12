import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongItems from "./SongItems";
import Header from "../../components/Header";
import Button from "@material-ui/core/Button";
import MicIcon from '@material-ui/icons/Mic';
import Footer from "../../components/Footer";
import RecorderWrapper from "./RecorderWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  btn:  {
    display: "table",
    margin: "30px auto"
  }
}));

const data = [
  {
    title: "what a day",
    notes: "it's a nice song",
    date: "1/2/3"
  },
  {
    title: "kryptonite",
    notes: "superman's greatest weakness",
    date: "2/4/8"
  },
  {
    title: "my best performance",
    notes: "this is literally perfect",
    date: "4/31/6"
  }
]


export default function SimpleAccordion() {
  const classes = useStyles();
  const [record, setRecord] = useState(false)

  const handleClick = () => {
    if(record === false) setRecord(true)
    else setRecord(false)
  }

  const addTitleSong = (title) => {
    console.log("Add title: ", title)

  }
  return (
    <div className={classes.root}>
      <Header title={"Song"} />
      <SongItems data={data}  />
      <div className={classes.btn}>
        <Button onClick={handleClick} variant="contained" color="secondary" >
          <div>Record</div>
          <MicIcon />
        </Button>
      </div>
      {
        record ? <RecorderWrapper addTitleSong={addTitleSong} /> : false
      }
      <Footer />
    </div>
  );
}
