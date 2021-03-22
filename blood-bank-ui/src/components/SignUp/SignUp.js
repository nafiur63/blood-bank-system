import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import bloodDrop from "./../../images/two-blood-drops.svg"

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



const SignUp = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container>
                <Grid align="center" item xs={12} md={6}>
                    <img src={bloodDrop} className={classes.bloodimage}/>
                    <h1 className={classes.heading} style={{fontSize:"2.6rem"}}><span style={{color:"red"}}>Blood</span> Donation</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0} style={{backgroundColor:"red"}}>
                        <Grid align="center">
                            <h2>Sign In</h2>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SignUp
