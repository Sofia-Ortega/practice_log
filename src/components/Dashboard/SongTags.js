import React from 'react'
import SongTag from "./SongTag";
export default function SongTags({songs}) {
  return (
    <div>
      {
        songs.map((title, index) => (
          <SongTag title={title} key={index} />
        ))
      }
    </div>
  )
}
