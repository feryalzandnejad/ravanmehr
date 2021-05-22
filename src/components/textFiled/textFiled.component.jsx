import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields({label, handleChange, variant, name, required, text} ) {
  const classes = useStyles();

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <h4>{name}</h4>
      <TextField id={label} label={text} variant={variant} onChange={handleChange} required={required}/>     
    </div>
  );
}