import React from "react";
import img_1 from "../assets/Imges/HeroSection_Img/Screenshot 2024-04-21 011938 2.png";
import img_2 from "../assets/Imges/HeroSection_Img/Untitled design (9) 2.png";
export default function Bonuses() {
  return (
    <div className="row mx-0 justify-content-center Bonuses py-5">
      <div className="col-lg-11 col-12 px-lg-0 px-2 ">
        <div className="card border-0 rounded-3 Bonuses_Card position-absolute">
          <div className="card-body Bonuses_Card_body  p-lg-5 ">
            <h1>Added Bonuses!!</h1>
            <p>
              Earn 30 days of code participation certificate and win exciting
              goodies and rewards as you complete your program and gain the
              highest scores.
            </p>
          </div>
        </div>
        <div className="img-Section position-relative">
          <img src={img_1} alt="" className="img-1 position-absolute" />
          <img src={img_2} alt="" className="img-2 position-relative" />
        </div>
      </div>
    </div>
  );
}
