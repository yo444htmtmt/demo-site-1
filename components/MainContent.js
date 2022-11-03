import React from "react";

import ImageTitle from "./ImageTitle";
import MainTitle from "./MainTitle";
import SlideImage from "./SlideImage";
import SubTitle from "./SubTitle";
import MainButton from "./MainButton";

const MainContent = () => {
  return (
    <>
      <main>
        <section className="houses">
          <div>
            <MainTitle mainTitle={"Find Your House"} />
            <SubTitle subTitle={"お気に入りの宿泊先を見つけましょう"} />
          </div>
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
              <SlideImage image={"/demo4.png"} />
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
