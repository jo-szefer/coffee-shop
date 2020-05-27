import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { slides } from "./contentSlider";

const SlideContent = styled.div`
  padding: 30px;
  line-height: 1.5;
  font-size: 1.7vw;
  font-family: "Playfair", sans-serif;
  letter-spacing: 0.5px;
  background-color: white;
  top: 25%;
  position: absolute;
  background: none;
  width: 40%;

  @media screen and (max-width: 500px) {
    font-size: 30%;
  }
`;

const SlideTitle = styled.h1`
  font-family: "Playfair Display", serif;
  margin-bottom: 5px;
  font-size: 3vw;
  letter-spacing: 1.5px;
  animation: showup 5s linear;
`;

const SlideTxt = styled.p`
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
const SliderButton = styled.button`
  font-size: 1.3vw;
  background: none;
  border: none;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 3%;
  color: black;
  display: block;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-image: linear-gradient(black, black);
  background-size: 0 1px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all 0.5s ease-out;
  &:hover {
    background-size: 20% 1px, auto;
  }
`;

export const Slider = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} useKeyboardArrows={true}>
      {slides.map((slide) => (
        <>
          <img src={slide.image} alt="" />
          <SlideContent>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideTxt>{slide.content}</SlideTxt>
            <SliderButton href="#">{slide.button}</SliderButton>
          </SlideContent>
        </>
      ))}
    </Carousel>
  );
};
