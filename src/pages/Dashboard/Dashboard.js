import React from "react"
import SongTags from "./SongTags"
import Header from "../../components/Header"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles";

const songs = ["Kryptonite", "Hey Brother", "Let it go", "It's my life"]


export default function Dashboard() {
  return (
    <div>
      <Header title={"Dashboard"}/>
      <SongTags songs={songs} />

      <Button variant="contained" color="secondary">Add</Button>
    </div>
  )
}
