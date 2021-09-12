import React from "react"
import SongItem from "./SongItem";
export default function SongItems({data}) {
  return(
    <div>
      {
        data.map((dat) => (
          <SongItem dat={dat} />
        ))
      }
    </div>
  )
}
