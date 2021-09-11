import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 30px",
  },

}))

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Practice Log</h1>

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


