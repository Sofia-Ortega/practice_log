import React from "react"
import SongTags from "./SongTags"
import {makeStyles} from "@material-ui/core/styles";

const songs = ["Kryptonite", "Hey Brother", "Let it go", "It's my life"]

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    fontFamily: 'Bitter',
    fontSize: "60px",
    padding: "0 0 30px 0"
  },
}))
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.header}>Dashboard</div>
      <SongTags songs={songs} />

      <div>

      </div>
    </div>
  )
}
