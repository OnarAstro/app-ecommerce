import { FaShoppingBag } from "react-icons/fa";

import "./TopHero.css";
const TopHero = () => {
  return (
    <>
      <div className="hero-bg " />
      <div className="top-hero container  ">
        <div className="top-hero-text">
          <h1 >Collections</h1>
          <p >
            you can explore ans shop many differnt collection from various
            barands here.
          </p>
          <div className="top-hero-btn ">
            <FaShoppingBag />
            <button className="">Explore Now</button>
          </div>
        </div>

        <div className="top-hero-img">
          <img className="" src="tophero.png" alt="" />
        </div>
      </div>
      <div className="hero-bg2 " />
    </>
  );
};

export default TopHero;
