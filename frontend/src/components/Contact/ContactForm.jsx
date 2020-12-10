import React from "react";
import styled from "styled-components";

import { Location } from "./Location";

const Background = styled.div`
  background-color: #71836b;
`;

const Title = styled.div`
  padding-top: 1%;
  text-align: center;
  font-family: "Playfair Display", sans-serif;
  letter-spacing: 1px;
  font-size: 1.5em;
  margin-top: 30px;
  opacity: 0.9;
  color: white;
`;

const Form = styled.form`
  max-width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  input {
    outline: none;
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 100%;
    // box-shadow: -2px 4px 15px 5px #a0a0a0;
    z-index: 1;
    background-color: white;
    cursor: pointer;
    margin: 10px;
    padding: 0.8em;
    border: #71836b;
    border-style: solid;
  }
  textarea {
    outline: none;
    // box-shadow: -2px 4px 15px 5px #a0a0a0;
    z-index: 1;
    background-color: white;
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    font-family: Arial, sans-serif;
    margin: 10px;
    padding: 0.8em;
    border: #71836b;
    border-style: solid;
  }
`;
const StyledSubmitBtn = styled.button`
  outline: none;
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  color: #71836b;
  // box-shadow: -2px 4px 15px 5px #a0a0a0;
  z-index: 1;
  background-color: white;
  font-family: sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin: 0 auto;
  border-style: solid;
  border-color: #71836b;
  transition: background-color 0.25s ease 0s, color 0.25s ease 0s;
  &:hover {
    background-color: #71836b;
    color: rgb(255, 255, 255);
  }
`;

export const ContactForm = () => {
  return (
    <>
      <Background>
        <Title>let's talk</Title>
        <Form>
          <FormField>
            <input
              type="email"
              name="email"
              placeholder="email address"
              required
            />
          </FormField>
          <FormField>
            <textarea
              className="stretch"
              name="message"
              rows="5"
              placeholder="message"
              required
            />
          </FormField>
          <StyledSubmitBtn
            type="submit"
            onClick={() => {
              alert("This feature will be added soon");
            }}
          >
            Send
          </StyledSubmitBtn>
        </Form>
      </Background>
      <Location />
    </>
  );
};
