import React from "react";
import styled from "styled-components";

const StyledMainButton = styled.button`
  position: relative;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 15px 40px;
  margin: 70px auto 60px auto;
  border: 1px solid black;
  background-color: white;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;
  box-shadow: 5px 5px 10px #000000cf;

  &:hover {
    color: white;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    pointer-events: none;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }
  &:hover::before {
    transform: translateX(0%);
    z-index: -1;
  }
`;

const MainButton = () => {
  return (
    <>
      <StyledMainButton>もっと詳しく</StyledMainButton>
    </>
  );
};

export default MainButton;
