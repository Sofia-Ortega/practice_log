import React from "react"

export default function SongItems({songs}) {
  return(
    <div>
      {
        songs.map((song) => (
          <div>Here</div>
        ))
      }
    </div>
  )
}
