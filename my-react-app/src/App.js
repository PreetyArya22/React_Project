import "./App.css";
import FaqSection from "./Components/FaqSection";
import HeroSection from "./Components/HeroSection";
import LearningSection from "./Components/LearningSection";
import OurBootcamps from "./Components/OurBootcamps.jsx";
import RegisterSection from "./Components/RegisterSection.jsx"


function App() {
  return (
    <>
      <div className="pb-5"><HeroSection /></div>
      <div className="py-5"><OurBootcamps /></div>
      <div className="py-5"><RegisterSection/></div>
      <div className="py-5"><LearningSection /></div>
      <div className="py-5"><FaqSection /></div>
    
    </>
  );
}

export default App;
