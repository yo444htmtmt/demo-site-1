import { createContext, useState } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import MobileMenue from "../components/MobileMenue";
import SubContent from "../components/SubContent";
import Swiper1 from "../components/Swiper";

export const globalContext = createContext();

export default function Home() {
  const [state, setState] = useState(false);

  const containerToggle = () => {
    if (state === true) {
      setState(!state);
    } else {
      return;
    }
  };

  return (
    <globalContext.Provider value={[state, setState]}>
      <div id="global-container">
        <MobileMenue />
        <div
          id="container"
          className={state ? "menu-open" : "menu-close"}
          onClick={containerToggle}
        >
          <header>
            <Header />
          </header>
          <div id="hero-container">
            <Swiper1 />
          </div>
          <div id="main-content">
            <MainContent />
          </div>
          <div id="sub-content">
            <SubContent />
          </div>
        </div>
      </div>
    </globalContext.Provider>
  );
}
