import React from "react";
import styled from "styled-components";

import { sendEmail } from "../../middleware/sendEmail";

const FormWrapper = styled.div`
  height: 100vh;
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
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 100%;
    background: none;
    cursor: pointer;
    margin: 10px;
    padding: 0.8em;
    border: #71836b;
    border-style: solid;
  }
  textarea {
    display: flex;
    flex: 1;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    font-family: Arial, sans-serif;
    margin: 10px;
    padding: 0.8em;
    border: #71836b;
    background: none;
    border-style: solid;
  }
`;
const StyledSubmitBtn = styled.button`
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  color: #71836b;
  background: none;
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
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(email, message);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <input
            onChange={onEmailChange}
            type="email"
            name="email"
            placeholder="email address"
            required
          />
        </FormField>
        <FormField>
          <textarea
            onChange={onMessageChange}
            className="stretch"
            name="message"
            rows="5"
            placeholder="message"
            required
          />
        </FormField>
        <StyledSubmitBtn type="submit">Send</StyledSubmitBtn>
      </Form>
    </FormWrapper>
  );
};
