import React from "react";
import { Learning_Objective } from "./Constants/Constants";

export default function LearningBootcamp() {
  return (
    <div className="row mx-0 LearningBootcamp pb-3">
      <div className="col-12 px-lg-0 px-2">
        <div className="text-center div-1 py-5">
          <h6>Unlock Your Potential & Master Essential Skills with</h6>
          <h1>Our Learning Objective</h1>
        </div>
        <div className="row mx-0 justify-content-center LearningBootcamp_Row_2 py-3">
          <div className="col-lg-10 col-12 px-0">
            <div className="d-lg-flex  gap-3 justify-content-center text-center align-item-center">
              {Learning_Objective.map((data, index) => (
                <div
                  className="d-flex flex-column align-items-center gap-2 py-3"
                  key={index}
                >
                  <div
                    style={{
                      backgroundColor: data.div_1.class,
                      width: "90px",
                      height: "90px",
                    }}
                    className="p-5 border-0 rounded-4 "
                  ></div>
                  <h3 className="pt-2 head-1 justify-content-center align-items-center">
                    {data.heading}
                  </h3>
                  <p className="p-0 m-0 pera-1">{data.pera}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
