import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/scss/home.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./assets/scss/LearningSection.scss"
import App from "./App";
import "slick-carousel/slick/slick.css";
import "./assets/scss/RegisterSection.scss";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/Comman.scss";
import "./assets/scss/Faq.scss";
import "./assets/scss/Scholarship.scss" ;
import "./assets/scss/Advantages.scss";
import "./assets/scss/LearningObjective.scss";
import "./assets/scss/OurBootcamp.scss"
import "./assets/scss/ProblemSolving.scss"
import "./assets/scss/Bonuses.scss"
// import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
