import React from "react";
import bloodDrop from "../../images/two-blood-drops.svg"
import { Grid, Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    bloodimage:{
        maxWidth:"25%",
        // paddingLeft:"30%",
        margin:"25% auto 0%"
    },
    heading:{
        padding:"0px 29%",
    }
}))

const Banner = () => {
const classes = useStyles()
  return (
    <Grid align="center" item xs={12} md={6}>
      <img src={bloodDrop} className={classes.bloodimage} />
      <h1 className={classes.heading} style={{ fontSize: "2.6rem" }}>
        <span style={{ color: "red" }}>Blood</span> Donation
      </h1>
    </Grid>
  );
};

export default Banner;
