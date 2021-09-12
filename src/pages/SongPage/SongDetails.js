import React from 'react'

export default function SongDetails({noteDat}) {
  return(

    <div>
      <div>
        Recording icons
      </div>
      <div>
        <h6>Notes:</h6>
        <p>
          {noteDat}
        </p>
      </div>
    </div>

  )
}
