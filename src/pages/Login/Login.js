import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 30px",
    // backgroundColor: "#00CED1",
  },
  title: {
    width: "25%",
    height: "30%",
    fontWeight: "5",
    fontFamily: "bitter",
    boxShadow: "0 0 10px 5px #add8e6",
    fontSize: "75px",
    textAlign: "center",


    backgroundColor: "#FFF",
    borderColor: "blue",



    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

  },
  buttons: {
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginBottom: "10px",
    width: "100px",

  }

}))


export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* HTML HERE*/}
      <h1 className={classes.title}>Rekora</h1>



      <Link to="/dashboard">
        <Button variant="contained" color="primary" className={classes.buttons}>
         Login
        </Button>
        <Button variant="contained" color="secondary" className={classes.buttons}>
          Sign up
        </Button>
      </Link>

    </div>
  )
}


