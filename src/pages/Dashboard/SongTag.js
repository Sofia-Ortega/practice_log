import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 15vw",
  },
  paper: {
    padding: "10px",
    textAlign: "center",
    fontStyle: "Bitter",
    fontSize: "20px",
    flexGrow: 1
  }
}))

export default function SongTag({title}) {
  const classes = useStyles();

  const handleClick = () => {
    //FIXME: get song info
  }

  return (
    <div className={classes.root}>
      <Link to="/song">
        <Paper
          className={classes.paper}
          elevation={2}
          onClick={handleClick}
        >
          {title}
        </Paper>
      </Link>

    </div>
  )
}
