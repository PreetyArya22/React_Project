import React from "react";
import { RxCross2 } from "react-icons/rx";
import img from "../assets/Imges/HeroSection_Img/Announce.png";

export default function Scholarship() {
  return (
    <div className="row mx-0 justify-content-center Scholarship py-5">
      <div className="col-lg-10 col-12 px-lg-0 px-2 py-lg-5 pb-5">
        <div className="row mx-0">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <div className="img ">
              <img alt="" src={img} className="img-section d-lg-flex d-none" />
            </div>
            <div className="card border-0 rounded-3 Scholarship_Card mt-5">
              <div className="card-body justify-content-end align-items-end d-flex flex-column">
                <span className="">
                  <RxCross2 className="" />
                </span>
                <h2>100% scholarship for up to 100 students</h2>
                <p className="m-0 p-0">
                  We are giving away 100% scholarship for upto 100 beginner
                  students to help them get started with their Coding journey
                  with datacode.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
