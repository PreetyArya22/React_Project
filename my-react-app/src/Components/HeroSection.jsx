import React from "react";
import img from "../assets/Imges/HeroSection_Img/Group (2).png"
import img_left from "../assets/Imges/HeroSection_Img/Left side.png"

export default function HeroSection() {
  return (
    <div className="row mx-0">
      <div className="col-12 px-0">
        <div className="hero-section d-flex flex-column gap-4 justify-content-center">
          <div className="text-center">
            <b>
              <h1 className="">30 DAYS OF CODE</h1>
            </b>
            <p>Your Pathway to Your Dream Tech Future</p>
          </div>
          <div className="row mx-0 justify-content-center">    
            <div className="col-lg-7 col-12  align-items-center img-section">
              <div className="d-flex input-box p-3  align-items-center justify-content-center gap-lg-3 gap-2">
                <div className="input-group width-section">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Technology"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div className="width-section">
                  <select className="form-select">
                    <option selected>Type</option>
                    <option value="1">React</option>
                    <option value="2">Java</option>
                    <option value="3">Python</option>
                  </select>
                </div>

                <div className="">
                  <button className="btn btn button-width">Search</button>
                </div>
              </div>
              <div className="content-section justify-content-center">
              <p className="content-section-pera">Batch Registrations are opening soon</p>
              <div className="d-flex gap-3">
                 <div className="ps-lg-5 ps-0 pt-2 arrow-img"><img src={img} alt=""/></div>
                <div className="text-center button-section pt-5">
                <button className="btn btn-light py-lg-3 py-2">Sign Up Today</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
