import React, { useEffect } from "react";
import "./main.css";
import { holidayDestinations } from "../../data/data";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {holidayDestinations.map((data) => {
          return (
            <div key={data.id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={data.imgSrc} alt={data.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{data.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {data.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{data.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{data.description}</p>
                </div>

                <button className="btn flex">
                  Details <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
