import "./Style/ma.css";
import Slider from "./slider/page";
import DishesContainer from "./dishesContainer/page";
import MiniCard from "./miniCard/page";
import Top from "./top3/page";
import Order from "./order/page";
import FirstHero from "./firstHero/page";

export default function Home() {
  return (
    <div className="maxidth color_bg">
      <div id="home">
        <FirstHero />
      </div>
      {/* <div className="  flex items-center justify-center   p-1" id="home">
        <Slider />
      </div> */}
      <div className="bg-red-500" id="famos">
        <DishesContainer />
      </div>
      <div className="  flex items-center justify-center p1 sm:p-0" id="recom">
        <Slider />
      </div>
      <div className="  flex items-center justify-center p1 sm:p-0" id="recom">
        <Top />
      </div>
      <div id="menu">
        <MiniCard />
      </div>
      {/* <div className="flex items-center justify-center p-10" id="review">
        <Order />
      </div> */}
    </div>
  );
}
