import React from "react";
import { Button, makeStyles, Container } from "@material-ui/core";
import bloodDrop from "./bloodDrop.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bloodimage: {
    maxWidth: "25%",
    paddingLeft: "30%",
    margin: "0% auto",
  },
  heading: {
    padding: "0px ",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  button: {
    borderRadius: "50px",
    backgroundColor: "red",
    color: "white",
    left: "22%",
    fontSize: "1.5rem",
    top: 80,
    padding: 20,
    "&:hover": {
      background: "#B22222",
    },
  },
}));

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.box}>
        <img src={bloodDrop} className={classes.bloodimage} />
        <h1
          className={classes.heading}
          style={{ paddingLeft: "20%", fontSize: "2.6rem" }}
        >
          <span style={{ color: "red" }}>Blood</span> Donation
        </h1>
        <Button
          variant="contained"
          className={classes.button}
          component={Link}
          to={"/Home"}
        >
          Start Journey
        </Button>
      </div>
    </Container>
  );
};

export default WelcomePage;
