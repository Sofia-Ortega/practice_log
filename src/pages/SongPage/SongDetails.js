import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function SongDetails({noteDat}) {
  return(

    <div>
      <div>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <PlayArrowIcon />
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
            <PauseIcon />
        </IconButton>
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
