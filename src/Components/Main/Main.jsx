import React from "react";
import "./main.css";
import { holidayDestinations } from "../../data/data";
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {holidayDestinations.map((data) => {
          return (
            <div key={data.id} className="singleDestination">
              <div className="imageDiv">
                <img src={data.imgSrc} alt={data.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">
                  {data.destTitle}
                </h4>
                <span className="contient flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{data.grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{data.price}</h5>
                  </div>

                  <div className="desc">
                    <p>{data.description}</p>
                  </div>

                  <button className="btn flex">
                    Details <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
