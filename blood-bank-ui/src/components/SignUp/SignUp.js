import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  FilledInput,
} from "@material-ui/core";
import bloodDrop from "./../../images/two-blood-drops.svg";
import Banner from "../Banner/Banner";
// import classes from "*.module.css";

const useStyles = makeStyles(theme => ({
    // bloodimage:{
    //     maxWidth:"25%",
    //     // paddingLeft:"30%",
    //     margin:"25% auto 0%"
    // },
    // heading:{
    //     padding:"0px 29%",
    // }
    forminput:{
        margin:"1rem 0",
        width:"50%",
        borderRadius:"50px",

    }
}))

const SignUp = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container>
        {/* <Grid align="center" item xs={12} md={6}>
                    <img src={bloodDrop} className={classes.bloodimage}/>
                    <h1 className={classes.heading} style={{fontSize:"2.6rem"}}><span style={{color:"red"}}>Blood</span> Donation</h1>
                </Grid> */}
        <Banner />
        <Grid item xs={12} md={6}>
          <Paper elevation={0} >
            <Grid >
              <h2 align="center">Sign In</h2>
              <form>
                <InputLabel>
                    Email or Username
                </InputLabel>
                {/* <Input className={classes.forminput} placeholder="john wick"/> */}
                <FilledInput placeholder="John Wick" className={classes.forminput}/>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
