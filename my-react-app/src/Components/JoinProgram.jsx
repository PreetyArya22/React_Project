import React from "react";
import logo_1 from "../assets/Imges/HeroSection_Img/logo (1).png";
import logo_2 from "../assets/Imges/HeroSection_Img/logo (2).png";
import logo_3 from "../assets/Imges/HeroSection_Img/logo (3).png";
import logo_4 from "../assets/Imges/HeroSection_Img/logo (4).png";
import logo_5 from "../assets/Imges/HeroSection_Img/logo (5).png";
import logo_6 from "../assets/Imges/HeroSection_Img/logo (6).png";
export default function JoinProgram() {
  return (
    <div className="row mx-0 justify-content-center">
      <div className="col-12 px-lg-0 px-2">
        <div className="row mx-0 justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="text-center div-1 py-5">
              <h6>Prepare for Your Dream Career</h6>
              <h1>Join Our Program Today!</h1>
              <p className="py-3">
                Unlock the door to endless opportunities with our program.
                Prepare yourself for success at top-tier companies and seize
                your chance to shine. Join us on the path to your dream career!
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-lg-1 gap-5 justify-content-center align-items-center pb-5">
          <img src={logo_1} alt="logo-1" width={200} height={32} />
          <img src={logo_2} alt="logo-1" width={200} height={32} />
          <img src={logo_3} alt="logo-1" width={200} height={32} />
          <img src={logo_4} alt="logo-1" width={200} height={32} />
          <img src={logo_5} alt="logo-1" width={200} height={32} />
          <img src={logo_6} alt="logo-1" width={200} height={32} />
        </div>
      </div>
    </div>
  );
}
