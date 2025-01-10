import React from "react";
import OurBootcampCard from "./OurBootcampCard";

export default function OurBootcamps() {
  return (
    <div className="row mx-0 OurBootcamps">
      <div className="col-12 px-lg-0 px-2">
        <div className="text-center div-1 py-5">
          <h6>Unlock Your Potential & Master Essential Skills with</h6>
          <h1>Our Bootcamps</h1>
        </div>
        <div className="row mx-0 justify-content-center OurBootcamps_Row_2">
          <div className="col-lg-10 col-12 px-0 ">
            <div className="navbar navbar-expand-lg  d-flex  flex-lg-column">
              {/* <!-- Toggler Button --> */}
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex justify-content-center align-items-lg-center gap-lg-5  py-2 OurBootcamps_Row_2_UL">
                  <li class="nav-item">
                    <a
                      class="nav-link active nav-content"
                      aria-current="page"
                      href
                    >
                      Upcoming
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href>
                      Past
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href>
                      Attended
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href>
                      Liked
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <OurBootcampCard />
      </div>
    </div>
  );
}
