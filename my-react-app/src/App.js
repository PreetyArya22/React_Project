import "./App.css";
import Advantages from "./Components/Advantages.jsx";
import FaqSection from "./Components/FaqSection";
import HeroSection from "./Components/HeroSection";
import LearningBootcamp from "./Components/LearningBootcamp.jsx";
import LearningSection from "./Components/LearningSection";
import OurBootcamps from "./Components/OurBootcamps.jsx";
import ProblemSolving from "./Components/ProblemSolving.jsx";
import RegisterSection from "./Components/RegisterSection.jsx"


function App() {
  return (
    <>
      <div className="pb-5"><HeroSection /></div>
      <div className="py-5"><ProblemSolving /></div>
      <div className="py-5"><OurBootcamps /></div>
      <div className="py-5"><Advantages /></div>
      <div className="py-5"><LearningBootcamp /></div>
      <div className="py-5"><RegisterSection/></div>
      <div className="py-5"><LearningSection /></div>
      <div className="py-5"><FaqSection /></div>
    
    </>
  );
}

export default App;
