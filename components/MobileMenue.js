import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";
import { globalContext } from "../pages";

const SMobileMenue = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 0;
  perspective: 2000px;
  transform-style: preserve-3d;

  & .menu-open {
    transform: none;
    opacity: 1;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  display: block;
  transform: translate3d(0, 0, -1000px);
  padding: 0 40px;
  transition: transform 0.3s, opacity 0.2s;
  opacity: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-top: 30px;
  color: black;
`;

const MainTitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 25px;
`;
const SubTitle = styled.span`
  display: block;
  font-size: 14px;
  color: #535353;
`;

const MobileMenue = () => {
  const [state] = useContext(globalContext);
  return (
    <SMobileMenue>
      <StyledUl className={state ? "menu-open" : "menu-close"}>
        <li>
          <StyledLink href={"/test1"} passHref>
            <MainTitle>Our Service</MainTitle>
            <SubTitle>サービスについて</SubTitle>
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/"} passHref>
            <MainTitle>About Us</MainTitle>
            <SubTitle>私達について</SubTitle>
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/"} passHref>
            <MainTitle>Contact Us</MainTitle>
            <SubTitle>お問い合わせ方法</SubTitle>
          </StyledLink>
        </li>
      </StyledUl>
    </SMobileMenue>
  );
};

export default MobileMenue;
