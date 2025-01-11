import React from "react";
import { Advantage_Data } from "./Constants/Constants";

export default function Advantages() {
  return (
    <div className="row mx-0 Advantages">
      <div className="col-12 px-lg-0 px-2">
        <div className="text-center div-1 py-5">
          <h6>Discover Your Advantages</h6>
          <h1>The Benefits Awaited for You!</h1>
        </div>
        <div className="row mx-0 justify-content-center Advantages_Section">
          <div className="col-lg-10 col-12 px-0">
            <div className="d-flex  flex-wrap gap-5 justify-content-center align-items-center">
              {Advantage_Data.map((data, index) => (
                <div
                  className=" d-flex  flex-column  gap-2 py-2"
                  key={index}
                  style={{ width: "480px" }}
                >
                  <div className="d-flex align-items-center gap-2 ">
                    <span className="fs-1">{data.icon}</span>
                    <h6 className="m-0">{data.heading}</h6>
                  </div>
                  <p className="pera-1">{data.pera}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
