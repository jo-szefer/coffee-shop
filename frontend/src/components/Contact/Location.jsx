import React from "react";
import styled from "styled-components";
import RoomIcon from "@material-ui/icons/Room";

import contact1JPG from "../../images/contact1.jpg";
import contact2JPG from "../../images/contact2.jpg";
import contact3JPG from "../../images/contact3.jpg";
import contact4JPG from "../../images/contact4.jpg";

const locations = [
  {
    name: "Whatever Gallery",
    img: contact1JPG,
    address: "Whatever Street 10, Sydney",
  },
  {
    name: "Cross street market",
    img: contact2JPG,
    address: "The other Street 10, Baltimore",
  },
  {
    name: "Die Antwoord Point",
    img: contact3JPG,
    address: "This Street 10, Cape Town",
  },
  {
    name: "The Roastery",
    img: contact4JPG,
    address: "Boring Street 10, Lile",
  },
];

const LocationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Colorful = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  img {
    width: 100%;
    padding: 60px 60px 30px;
  }
  p {
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    opacity: 0.9;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 15px;
  }
  h2 {
    font-family: "Playfair Display", serif;
    text-transform: capitalize;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 15px;
    line-height: 1.2;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const Location = () => {
  return (
    <LocationsWrapper>
      {locations.map((location) => (
        <Colorful>
          <img src={location.img} alt="cafe location" />
          <RoomIcon />
          <p>Visit us!</p>
          <h2>{location.name}</h2>
          <p>{location.address}</p>
        </Colorful>
      ))}
    </LocationsWrapper>
  );
};
