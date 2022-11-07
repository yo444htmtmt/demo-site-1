import React from "react";
import styled from "styled-components";

import ImageTitle from "./ImageTitle";
import MainTitle from "./MainTitle";
import SlideImage from "./SlideImage";
import SubTitle from "./SubTitle";
import MainButton from "./MainButton";
import { useInView } from "react-intersection-observer";

const StyledTitle = styled.div`
  position: relative;
  padding-left: 30px;
`;

const MainContent = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <>
      <main>
        <section className="houses">
          <StyledTitle ref={ref}>
            {inView ? (
              <>
                <MainTitle mainTitle={"Main Title です。"} />
                <SubTitle subTitle={"sub title です。"} />
              </>
            ) : (
              false
            )}
          </StyledTitle>
          <div className="houses__inner flex">
            <div className={"house__item"}>
              <SlideImage image={"/demo1.jpg"} />
              <ImageTitle />
            </div>
            <div className={"house__item"}>
              <SlideImage image={"/demo2.jpg"} />
              <ImageTitle />
            </div>
            <div className={"house__item"}>
              <SlideImage image={"/demo3.jpg"} />
              <ImageTitle />
            </div>
            <div className={"house__item"}>
              <SlideImage image={"/demo4.jpg"} />
              <ImageTitle />
            </div>
          </div>
        </section>
        <div className={"main_button"}>
          <MainButton />
        </div>
      </main>
    </>
  );
};

export default MainContent;
