import React from 'react'
import {Link} from "react-router-dom"

const appbarStyle = {
  textAlign: "center",
  fontStyle: "Bitter",
  fontSize: "20px",
  borderBottom: "1px solid black",
  margin: "10px 40vw 50px 40vw",
  paddingBottom: "10px",
  color: "#5252c3",
  fontWeight: "700px"
}


export default function Appbar() {
  return (
    <Link to="/dashboard">
      <h4 style={appbarStyle}>
        Rekora
      </h4>
    </Link>
  )
}
