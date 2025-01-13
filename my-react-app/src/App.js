import "./App.css";
import Advantages from "./Components/Advantages.jsx";
import Bonuses from "./Components/Bonuses.jsx";
import FaqSection from "./Components/FaqSection";
import HeroSection from "./Components/HeroSection";
import JoinProgram from "./Components/JoinProgram.jsx";
import LearningBootcamp from "./Components/LearningBootcamp.jsx";
import LearningSection from "./Components/LearningSection";
import OurBootcamps from "./Components/OurBootcamps.jsx";
import ProblemSolving from "./Components/ProblemSolving.jsx";
import RegisterSection from "./Components/RegisterSection.jsx";
import Scholarship from "./Components/Scholarship.jsx";

function App() {
  return (
    <>
      <div className="pb-5">
        <HeroSection />
      </div>
      <div className="py-5">
        <Scholarship />
      </div>
      <div className="py-5">
        <ProblemSolving />
      </div>
      <div className="py-5">
        <OurBootcamps />
      </div>
      <div className="py-5">
        <Advantages />
      </div>
      <div className="py-5">
        <Bonuses />
      </div>
      <div className="py-5">
        <LearningBootcamp />
      </div>
      <div className="py-5">
        <RegisterSection />
      </div>
      <div className="py-5">
        <JoinProgram/>
      </div>
      <div className="py-5">
        <LearningSection />
      </div>
      <div className="py-5">
        <FaqSection />
      </div>
    </>
  );
}

export default App;
