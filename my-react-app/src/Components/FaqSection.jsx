import React, { useState } from "react";
import { FaqSection_data } from "./Constants/Constants";
import { FaPlus } from "react-icons/fa6";

export default function FaqSection() {
  const [openItems, setOpenItems] = useState({}); // State to track open items

  const handleChange = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific FAQ item
    }));
  };

  return (
    <div className="row mx-0 justify-content-center">
      <div className="col-12 px-0">
        <div className="text-center div-1 py-5">
          <h6>Your Questions, Answered</h6>
          <h1>Dive into Our FAQs</h1>
        </div>
        <div className="row mx-0 justify-content-center FaqSection">
          <div className="col-lg-8  col-12 px-lg-0 px-2">
            <div className="">
              {FaqSection_data.map((data , index) => (
                <div className="py-2" key={index}>
                  <div className="card rounded-0  FaqSection-Card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center">
                      <h5>{data.Question}</h5>
                      <span  onClick={() => handleChange(index)}><FaPlus /></span>
                      </div>
                      {openItems[index] && (
                        <p className="m-0">{data.Answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
