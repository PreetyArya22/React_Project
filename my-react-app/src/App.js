import "./App.css";
import HeroSection from "./Components/HeroSection";
import LearningSection from "./Components/LearningSection";


function App() {
  return (
    <>
      <div className="pb-5"><HeroSection /></div>
      <div className="py-5"><LearningSection /></div>
      <div className="py-5"></div>
    </>
  );
}

export default App;
