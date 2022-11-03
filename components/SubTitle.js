import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateY(-50%);
}

100% {
    opacity: 1;
    transform: translateY(0%);
}
`;

const AnimationSpan = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(-50%);
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: ${(props) => props.count * 0.05}s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;
`;

const SubTitle = ({ subTitle }) => {
  const chars = Array.from(subTitle).map((char, index) => {
    if (char === " ") {
      return (
        <AnimationSpan key={index} count={index}>
          &nbsp;
        </AnimationSpan>
      );
    } else {
      return (
        <AnimationSpan key={index} count={index}>
          {char}
        </AnimationSpan>
      );
    }
  });

  return (
    <>
      <p className="sub-title">{chars}</p>
    </>
  );
};

export default SubTitle;
