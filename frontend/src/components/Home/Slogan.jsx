import React from "react";
import styled from "styled-components";

const SloganContainer = styled.div`
  position: relative;
  height: 40vh;
  display: flex;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const StyledVideo = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: -1;
`;
const StyledSlogan = styled.div`
  display: flex;
  font-family: "Roboto Slab", serif;
  letter-spacing: 0.025em;
  font-size: 3vw;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  overflow: hidden;
  white-space: nowrap;
`;

export const Slogan = () => {
  const videoSource = "./images/slogan_vid.mp4";
  return (
    <SloganContainer>
      <StyledVideo
        autoPlay="autoPlay"
        muted
        loop="loop"
        src={videoSource}
        type="video/mp4"
      >
        Your browser does not support the video tag
      </StyledVideo>
      <StyledSlogan>
        <span>
          We believe <br />a cup of coffee is one of the most important,
          <br /> simple pleasures in life
        </span>
      </StyledSlogan>
    </SloganContainer>
  );
};
