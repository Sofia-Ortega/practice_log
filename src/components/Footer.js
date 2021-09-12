import React from 'react'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const btnStyle = {
  display: "table",
  margin: "30px auto"
}

export default function Footer() {
  return (
    <Link to="/login">
      <div style={btnStyle}>
        <Button variant="outlined" color="primary">
          Logout
        </Button>
      </div>
    </Link>
  )
}
