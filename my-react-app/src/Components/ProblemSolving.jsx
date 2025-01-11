import React from "react";
import {
  IoCodeSlashSharp,
  IoGitNetworkOutline,
  IoHeart,
} from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";

export default function ProblemSolving() {
  return (
    <div className="row mx-0 justify-content-center ProblemSolving ">
      <div className="col-lg-11 col-12 px-lg-0 px-2  py-5">
        <div className="row mx-0 ProblemSolving_Section justify-content-center align-items-center">
          <h3 className="heading">What is 30 Days of Code??</h3>
          <div className="col-lg-6 col-12 pt-lg-5 ">
            <div className="d-flex flex-column div-2">
              <h1 className="m-0 p-0">
                A quality place <br /> to learn and{" "}
                <span className="span-1 m-0 p-0">
                  <IoHeart />
                </span>
                <br />
                <span className="span-2 m-0 p-0">Problem Solving</span>
              </h1>
              <div className="pt-3">
                <button className="btn btn rounded-0 border-0 px-5 py-3">
                  Sign up Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12  pt-lg-0 pt-5">
            <div className="d-flex  gap-3">
              <div
                className="card border-0 rounded-3 position-absolute div-1"
                style={{
                  backgroundColor: "#1D91FD",
                }}
              >
                <div className="card-body d-flex flex-column gap-2">
                  <span>
                    <IoCodeSlashSharp />
                  </span>
                  <p>Submit Solution in any Popular Language</p>
                </div>
              </div>
              <div
                className="card border-0 rounded-3 position-relative  div-1 div-3"
                style={{
                  backgroundColor: "#04A93B",
                  zIndex: 2,
                  marginTop: "110px",
                  marginLeft: "120px",
                }}
              >
                <div className="card-body d-flex flex-column gap-2">
                  <span>
                    <LuNotebookText />
                  </span>
                  <p>Submit Solution in any Popular Language</p>
                </div>
              </div>
              <div
                className="card border-0 rounded-3 div-1 child-div_2 position-position-absolute"
                style={{
                  backgroundColor: "#EC0068",
                  marginLeft: "-100px",
                }}
              >
                <div className="card-body d-flex flex-column gap-2">
                  <span>
                    <IoGitNetworkOutline />
                  </span>
                  <p>Submit Solution in any Popular Language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
