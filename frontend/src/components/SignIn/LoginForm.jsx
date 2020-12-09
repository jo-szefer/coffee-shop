import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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
`;
const StyledHeader = styled.div`
  margin-bottom: 10px;
  span {
    font-family: "Playfair Display", serif;
    margin: 20px 0 10px 15px;
    letter-spacing: 1px;
  }
  h2 {
    font-family: "Playfair Display", serif;
    margin: 20px 0 10px 15px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
  }
`;

const StyledLoginBtn = styled.button`
  outline: none;
  cursor: pointer;
  margin: 10px;
  padding: 0.8em;
  background: transparent;
  border-style: solid;
  border-color: #71836b;
  border-radius: 3rem;
  text-align: center;
  text-decoration: none;
  color: #71836b;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  transition: background-color 0.25s ease 0s, color 0.25s ease 0s;
  &:hover {
    background-color: #71836b;
    color: rgb(255, 255, 255);
  }
`;

export const LoginForm = () => {
  const classes = useStyles();

  return (
    <StyledFormsContainer>
      <form className={classes.root} noValidate autoComplete="off">
        <StyledLogin>
          <StyledHeader>
            <h2>my account</h2>
            <span>Log into your account below</span>
          </StyledHeader>

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
        <StyledLoginBtn
          onClick={() => alert("Ths feature will be added soon :)")}
        >
          Sign in
        </StyledLoginBtn>
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <StyledLogin>
          <StyledHeader>
            <h2>new user</h2>
            <span>Create new account below</span>
          </StyledHeader>
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
        <StyledLoginBtn
          onClick={() => alert("This feature will be added soon :)")}
        >
          Sign up
        </StyledLoginBtn>
      </form>
    </StyledFormsContainer>
  );
};
