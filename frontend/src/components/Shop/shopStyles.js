import styled from "styled-components";

export const Products = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const BtnAdd = styled.button`
  outline: none;
  font-size: larger;
  padding: 20px 32px;
  border: none;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 2px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity: 0;
`;
export const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 3%;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
  }
  &:hover::before {
    background-color: rgba(90, 81, 81, 0.486);
  }
  &:hover ${BtnAdd} {
    opacity: 1;
    background-color: #71836b;
    color: rgb(255, 255, 255);
  }
  @media (max-width: 909px) {
    width: 40%;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Description = styled.span`
  display: flex;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.5px;
  text-align: center;
  margin-top: 5px;
`;
