import React from "react"

const headerStyle = {
  textAlign: "center",
  fontFamily: 'Bitter',
  fontSize: "60px",
  padding: "0 0 30px 0"

}
export default function Header({title}) {
  return (
    <div style={headerStyle}>
      {title}
    </div>
  )
}
