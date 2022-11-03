import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

const coverKeyframe = keyframes`
0% { //左に押しつぶされている
    left: 0;
    right: 100%; 
}
50% {
    left: 0;
    right: 0;
}
100% {
    left: 100%;
    right: 0;
}
`;

const imageKeyframe = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
50.1% {
    opacity: 1;
    transform: scale(1.5);
}
100% {
    opacity: 1;
}
`;

const ImageContainer = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eaebe6;
    animation-name: ${coverKeyframe};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: both;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: background-color 0.3s ease;
    pointer-events: none;
    animation-name: ${imageKeyframe};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 0;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
  }
  &:hover::before {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ZoomImage = styled(Image)`
  opacity: 1;
  transition: transform 0.3s ease;
  animation-name: ${imageKeyframe};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const ObserverContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 800px;
  height: 300px;
`;

const SlideImage = ({ image }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-80px",
  });

  return (
    <ObserverContainer ref={ref}>
      {inView ? (
        <ImageContainer>
          <ZoomImage src={image} fill alt={"image"} priority={true} />
        </ImageContainer>
      ) : (
        ""
      )}
    </ObserverContainer>
  );
};

export default SlideImage;
