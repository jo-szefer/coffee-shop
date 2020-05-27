import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import GoogleBtn from "./GoogleBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

const StyledFormsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledLogin = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  span {
    font-family: "Playfair Display", serif;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
    letter-spacing: 1px;
  }
  h2 {
    font-family: "Playfair Display", serif;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
    letter-spacing: 1px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
  }
`;

const StyledLoginBtn = styled.button`
cursor: pointer;
  padding: 10px;
  background-color: skyblue;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 10px;
  padding: 0.8em;
  color: #71836b;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: inline-block;
  text-align: center;
  background: transparent;
  border-style: solid;
  border-color:#71836b;
  border-image: initial;
  border-radius: 3rem;
  transition: background-color 0.25s ease 0s, color 0.25s ease 0s;
  &:hover{
    background-color: #71836b;
    color: rgb(255, 255, 255);
  }
  }`;

export const LoginForm = () => {
  const classes = useStyles();

  return (
    <StyledFormsContainer>
      <form className={classes.root} noValidate autoComplete="off">
        <StyledLogin>
          <h2>my account</h2>
          <span>Log into your account below</span>

          <TextField
            id="outlined-search"
            label="E-mail"
            type="email"
            variant="outlined"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </StyledLogin>
        <StyledLoginBtn>Sign in</StyledLoginBtn>

        <GoogleBtn />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <StyledLogin>
          <h2>new user</h2>
          <span>Create new account below</span>
          <TextField
            id="outlined-search"
            label="Name"
            type="name"
            variant="outlined"
          />
          <TextField
            id="outlined-search"
            label="E-mail"
            type="email"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Confirm Password"
            type="password"
            variant="outlined"
          />
        </StyledLogin>
        <StyledLoginBtn>Sign up</StyledLoginBtn>
      </form>
    </StyledFormsContainer>
  );
};
