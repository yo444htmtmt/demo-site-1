import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import MainButton from "./MainButton";
import { useInView } from "react-intersection-observer";

const subImageKeyframe = keyframes`
0% {
  opacity: 0;
}
50%, 100% {
  opacity: 1;
}
`;

const SubContentContainer = styled.div`
  background-color: rgb(250, 239, 221);
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    background-color: rgb(208, 199, 181);
    width: 93%;
    margin: 0 auto;
    bottom: 0;
    height: 87%;
    left: 0;
    right: 0;
    @media (max-width: 700px) {
      height: 90%;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  top: 50px;
  width: 100%;
  max-width: 1000px;
  align-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    height: 1400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

const StyledImage = styled.div`
  position: relative;
  height: 300px;
  flex-basis: 40%;
  margin-bottom: 80px;
  text-align: center;
  box-shadow: 7px 7px 20px #00000091;

  animation-name: ${subImageKeyframe};
  animation-duration: 4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: both;

  @media (max-width: 700px) {
    flex-basis: 20%;
    width: 70%;
  }
`;

const SubContent = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: "-50px",
  });
  return (
    <>
      <SubContentContainer>
        <ImageContainer ref={ref}>
          {inView ? (
            <>
              <StyledImage>
                <Image
                  src={"/demo1.jpg"}
                  fill
                  alt={"image"}
                  priority={true}
                  objectFit={"contain"}
                  className={"sub-image"}
                />
                <h3 className={"sub-image-name"}>SubImage</h3>
              </StyledImage>
              <StyledImage>
                <Image
                  src={"/demo2.jpg"}
                  fill
                  alt={"image"}
                  priority={true}
                  objectFit={"contain"}
                />
                <h3 className={"sub-image-name"}>SubImage</h3>
              </StyledImage>
              <StyledImage>
                <Image
                  src={"/demo3.jpg"}
                  fill
                  alt={"image"}
                  priority={true}
                  objectFit={"contain"}
                />
                <h3 className={"sub-image-name"}>SubImage</h3>
              </StyledImage>
              <StyledImage>
                <Image
                  src={"/demo4.jpg"}
                  fill
                  alt={"image"}
                  priority={true}
                  objectFit={"contain"}
                />
                <h3 className={"sub-image-name"}>SubImage</h3>
              </StyledImage>
            </>
          ) : (
            <></>
          )}
        </ImageContainer>
        <div className={"sub_button"}>
          <MainButton />
        </div>
      </SubContentContainer>
    </>
  );
};

export default SubContent;
