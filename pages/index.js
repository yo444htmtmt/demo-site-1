import MainContent from "../components/MainContent";
import SubContent from "../components/SubContent";
import Swiper1 from "../components/Swiper";

export default function Home() {
  return (
    <div>
      <div id="global-container">
        <div id="container">
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
    </div>
  );
}
