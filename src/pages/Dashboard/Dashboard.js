import React from "react"
import SongTags from "./SongTags"
import Header from "../../components/Header"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import Appbar from "../../components/Appbar";

const useStyles = makeStyles(() => ({
  btn: {
    display: "table",
    margin: "30px auto",

  },

}))
const songs = ["Kryptonite", "Hey Brother", "Let it go", "It's my life"]


export default function Dashboard() {
  const classes = useStyles()
  return (
    <div>
      <Header title={"Dashboard"}/>
      <SongTags songs={songs} />

      <div className={classes.btn}>
        <Button variant="contained" color="secondary" >
          <div >Add</div>
          <AddIcon />
        </Button>
      </div>
    </div>
  )
}
