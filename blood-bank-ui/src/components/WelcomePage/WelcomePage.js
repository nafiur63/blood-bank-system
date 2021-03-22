import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import bloodDrop from "./bloodDrop.svg"
import {Link} from "react-router-dom"

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius:"50px",
    backgroundColor:"red",
    color:"white",
    left:"25%",
    fontSize:"1.5rem",
    top:90,
    padding:20,
  },
  bloodimage: {
    maxWidth:"25%",
    paddingLeft:"30%",
  },
  box: {
    position:"absolute",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
  }
}))

const WelcomePage = () => {
  const classes= useStyles()
  return (
    <div className={classes.box}>
      <img className={classes.bloodimage} src={bloodDrop}/>
      <h1 style={{paddingLeft:"20%",fontSize:"2.6rem",fontWeight:"900"}}><span style={{color:"red"}}>Blood</span> Donation</h1>
      <Button variant="contained" className={classes.button} component={Link} to={"/uploadphoto"}>Start Journey</Button>
    </div>
  )
}


export default WelcomePage
