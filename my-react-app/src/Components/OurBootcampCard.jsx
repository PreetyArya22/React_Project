import React from "react";
import { Bootcamp_Card } from "./Constants/Constants";

export default function OurBootcampCard() {
  return (
    <div className="row mx-0 justify-content-center OurBootcampCard">
      <div className="col-12 px-0">
        <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
          {Bootcamp_Card.map((data, index) => (
            <div className="" key={index}>
              <div className="card OurBootcampCard_Contain">
                <div className="card-body d-flex gap-2 flex-column">
                  <div className="d-flex flex-row gap-3">
                    <button className="btn btn-outline-light btn-1">
                      {data.btn_1}
                    </button>
                    <button className="btn btn-outline-light  btn-1">
                      {data.btn_2}
                    </button>
                    <button className="btn btn-outline-light  btn-1">
                      {data.btn_3}
                    </button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-2">
                    <h6 className="head-1">{data.Profession}</h6>
                    <span className="span-1">{data.icon}</span>
                  </div>
                  <p className="m-0 pera-1">{data.pera_1}</p>
                  <p className="m-0 pera-1">{data.pera_2}</p>
                  <div className="d-flex  justify-content-between align-items-center">
                    <button className="btn btn btn-2">{data.btn_4}</button>
                    <p className="m-0 pera-2">{data.pera_3}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
