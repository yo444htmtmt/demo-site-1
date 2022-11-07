import Link from "next/link";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { globalContext } from "../pages";
import { useInView } from "react-intersection-observer";

const HeaderContainer = styled.div`
  width: 100%;
  position: ${({ inView }) => (inView ? `relative` : `fixed`)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ inView }) =>
    inView ? `white` : `rgba(255, 255, 255, 0.7)`};
  z-index: 5;

  & .menu-open {
    & > span {
      &:nth-child(1) {
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
`;

const HeaderLogo = styled.h1`
  height: 50px;
  margin-left: 30px;
`;

const MenuIcon = styled.div`
  position: relative;
  background-color: transparent;
  border: none;
  margin-right: 30px;
  @media (min-width: 800px) {
    display: none;
  }

  & > span {
    background-color: black;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const DeskTopMenu = styled.nav`
  position: relative;
  display: none;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 50px 0 30px;
  position: relative;
  display: block;
  color: black;
`;

const HeaderButton = styled.button`
  position: relative;
  width: 100px;
  height: 30px;
  background-color: black;
  color: white;
  box-shadow: 1px 1px 9px 3px black;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    background-color: #444040ff;
    box-shadow: none;
    border: none;
  }
`;

const Header = () => {
  const [state, setState] = useContext(globalContext);
  const classToggle = () => {
    setState((prev) => !prev);
  };
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div className="nav-trigger" ref={ref}>
      <HeaderContainer inView={inView}>
        <HeaderLogo>MayoSite</HeaderLogo>
        <MenuIcon
          onClick={classToggle}
          className={state ? "menu-open" : "menu-close"}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuIcon>
        <DeskTopMenu>
          <StyledLink href={"/"}>SERVICE</StyledLink>
          <StyledLink href={"/"}>ABOUT</StyledLink>
          <StyledLink href={"/"}>
            <HeaderButton>CONTACT</HeaderButton>
          </StyledLink>
        </DeskTopMenu>
      </HeaderContainer>
    </div>
  );
};

export default Header;
