import React from "react";
import Slider from "react-slick";
import { LearningData } from "./Constants/Constants";
import { CustomNextArrow, CustomPrevArrow } from "./ArrowFunction";
export default function LearningSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive :[
      {
        breakpoint : 768,
          settings :{
            slidesToShow:1,
            slidesToScroll:1,
          }
        
      }
    ]
  };

  return (
    <div className="row mx-0 LearningSection">
      <div className="col-12 px-0">
        <div className="text-center div-1 py-5">
          <h6>Voices of Success</h6>
          <h1>Hear What Our Learners Are Saying</h1>
        </div>
        <div className="row mx-0 justify-content-center py-lg-5 py-0">
          <div className="col-11 px-lg-0 px-2 ">
            <Slider {...settings}>
              {LearningData.map((data, index) => (
                <div key={index} className="d-flex gap-2 justify-content-center">
                  <div className="card div-2 text-center rounded-0">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center gap-3">
                      <div className="d-flex justify-content-center gap-2 align-items-center">
                        <img src={data.img} alt="" width={32} height={32} />
                        <h4 className="m-0">{data.heading}</h4>
                      </div>
                      <p>{data.description}</p>
                      <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                        <div className="icon-div d-flex border-0 rounded-circle justify-content-center align-items-center"><span className="m-0">{data.icon}</span></div>
                        <h6 className="">{data.author_Name}</h6>
                        <p className="role">{data.Role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
