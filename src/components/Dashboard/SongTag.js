import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 30px",
  },
  paper: {
    padding: "10px",
    textAlign: "center",
  }
}))

export default function SongTag({title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/song">
        <Paper
          className={classes.paper}
          elevation={2}
        >
          {title}
        </Paper>
      </Link>

    </div>
  )
}
