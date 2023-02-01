import React, { useEffect } from "react";
import "./home.css";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div data-aos="fade-up" className="textDiv">
          <span className="smallText">Out Packages</span>
          <h1 data-aos="fade-up" data-aos-delay="300" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter city here..." />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>More filters</span>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="homeFooterIcons flex"
        >
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
