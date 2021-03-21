import React from 'react';
import Button from '@material-ui/core/Button';
import './PlainCssButton.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button : {
        borderRadius:"50px",
        color:"red",
        backgroundColor:"purple"
    }
}))


export default function PlainCssButton() {
    const classes= useStyles()
  return (
    <div>
      <Button>Default</Button>
      <Button className={classes.button}>Customized</Button>
    </div>
  );
}