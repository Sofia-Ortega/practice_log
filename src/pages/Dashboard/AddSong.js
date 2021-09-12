import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles((theme) => ({
  textField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  body: {
    marginTop: "100px"
  }
}));

export default function AddSong({addTitleSong}) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = () => {
    addTitleSong(value);
  }

  return (

    <div>
      <Grid className={classes.body} container alignItems="flex-end">
      <Grid item>
        <IconButton aria-label="delete" onClick={handleSubmit} >
          <AddIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label={"Song name"}
          variant="standard"
          value={value}
          onChange={handleChange}
          className={classes.textField}
        />
      </Grid>
    </Grid>
    </div>
  );
}
