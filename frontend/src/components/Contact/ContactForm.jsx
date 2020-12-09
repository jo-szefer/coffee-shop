import React from "react";
import styled from "styled-components";
import RoomIcon from "@material-ui/icons/Room";

import contact1JPG from "../../images/contact1.jpg";
import contact2JPG from "../../images/contact2.jpg";
import contact3JPG from "../../images/contact3.jpg";
import contact4JPG from "../../images/contact4.jpg";

const FormWrapper = styled.div`
  height: 150vh;
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
    box-shadow: -2px 4px 15px 5px #a0a0a0;
    z-index: 1;
    background-color: white;
    cursor: pointer;
    margin: 10px;
    padding: 0.8em;
    border: #71836b;
    border-style: solid;
  }
  textarea {
    box-shadow: -2px 4px 15px 5px #a0a0a0;
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
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  color: #71836b;
  box-shadow: -2px 4px 15px 5px #a0a0a0;
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

const Image1 = styled.img`
  width: 40%;
  position: absolute;
  top: 70%;
  left: 5%;
  margin: 1vw;
`;
const Image2 = styled.img`
  width: 40%;
  position: absolute;
  top: 120%;
  right: 5%;
  margin: 1vw;
`;
const Image3 = styled.img`
  width: 40%;
  margin: 1vw;
`;
const Colorful = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  top: 140%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-family: "Playfair Display", serif;
    letter-spacing: 1.5px;
  }
  span {
    font-family: "Playfair Display", serif;
    letter-spacing: 1.5px;
    font-size: 2em;
  }
`;
const Image4 = styled.img`
  position: absolute;
  top: 50%;
  width: 40%;
  margin: 1vw;
  right: 0;
`;

export const ContactForm = () => {
  return (
    <>
      <FormWrapper>
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
          <StyledSubmitBtn type="submit">Send</StyledSubmitBtn>
        </Form>
      </FormWrapper>
      <Image1 src={contact1JPG} alt="" />
      <Image2 src={contact2JPG} alt="" />
      <Colorful>
        <RoomIcon />
        <h1>Visit us!</h1>
        <span> Whatever Street 10, Sydney </span>
      </Colorful>
      <Image3 src={contact3JPG} alt="" />
      <Image4 src={contact4JPG} alt="" />
    </>
  );
};
