import React, {useState} from "react"
import SongTags from "./SongTags"
import Header from "../../components/Header"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import Appbar from "../../components/Appbar";
import AddSong from "./AddSong";
import Footer from "../../components/Footer";

const useStyles = makeStyles(() => ({
  btn: {
    display: "table",
    margin: "30px auto",

  },

}))


export default function Dashboard() {
  const classes = useStyles();

  const [displayInput, setDisplayInput] = useState(false)
  const [songs, setSongs] = useState( ["Kryptonite", "Hey Brother", "Let it go", "It's my life"] )
  const handleDisplayAdd = () => {
    if(displayInput === true) setDisplayInput(false);
    else setDisplayInput(true)
  }

  const handleAdd = (item) => {
    setSongs([...songs, item])
  }
  return (
    <div>
      <Header title={"Dashboard"}/>
      <SongTags songs={songs} />

      {
        displayInput ? <AddSong addTitleSong={handleAdd} /> : false
      }

      <div className={classes.btn}>
        <Button onClick={handleDisplayAdd} variant="contained" color="secondary" >
          <div >Add</div>
          <AddIcon />
        </Button>
      </div>

      <Footer />
    </div>
  )
}
