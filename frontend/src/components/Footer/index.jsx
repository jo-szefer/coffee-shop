import React from "react";
import styled from "styled-components";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import { FooterLogo } from "./FooterLogo";

const Contact = styled.div`
  background-color: #71836b;
  color: #fff;
  margin-top: 30px;
  padding: 30px 0;
`;

const ContactBox = styled.div`
  max-width: 100%;
  margin: 40px 20% 40px 20%;
  align-items: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;
const StandardMediaBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledPhone = styled.div`
  display: inline-flex;

  padding: 10px 0;
  p {
    font-family: sans-serif;
    margin: 5px;
    font-size: 1.2em;
  }
  .MuiSvgIcon-root {
    font-size: 2em;
  }
`;
const StyledMail = styled.div`
  display: inline-flex;
  a {
    text-decoration: none;
    color: white;
    font-family: sans-serif;
    margin: 5px;
    font-size: 1.2em;
  }
  .MuiSvgIcon-root {
    font-size: 2em;
  }
`;

const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: row;
  .MuiSvgIcon-root {
    font-size: 2.7em;
    margin: 10px;
    cursor: pointer;
  }
`;

export const Footer = () => {
  return (
    <Contact>
      <FooterLogo />
      <ContactBox>
        <StandardMediaBox>
          <StyledPhone>
            <PhoneAndroidIcon />
            <p> +48 213 721 372</p>
          </StyledPhone>
          <StyledMail>
            <MailIcon />
            <a href="mailto:jo.szefer@gmail.com">jo.szefer@gmail.com</a>
          </StyledMail>
        </StandardMediaBox>
        <SocialMediaBox>
          <InstagramIcon
            onClick={() =>
              (window.location.href = "http://instagram.com/recenzjepsow")
            }
          />
          <FacebookIcon
            onClick={() =>
              (window.location.href = "http://facebook.com/knowyourmeme/")
            }
          />
        </SocialMediaBox>
      </ContactBox>
    </Contact>
  );
};
