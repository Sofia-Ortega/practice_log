import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 30px",
  },
  title: {
    backgroundColor: "blue",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  },
  buttons: {

  }

}))


export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* HTML HERE*/}
      <h1 className={classes.title}>Practice Log</h1>

      <button className={classes.buttons}>Style me</button>

      <Link to="/dashboard">
        <Button variant="contained" color="primary">
         Login
        </Button>
        <Button variant="contained" color="secondary">
          Sign up
        </Button>
      </Link>

    </div>
  )
}


