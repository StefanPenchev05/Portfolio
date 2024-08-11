import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import Features from "./sections/Features";
import "./index.css";
import Education from "./sections/Education";

function App() {
  return (
    <div className="bg-dark-bg font-primary space-y-12">
    <NavBar />
    <Element name="home" className="z-50 mt-0">
        <Home />
    </Element>
    <Element name="features">
        <Features />
    </Element>
    <Element name="education">
      <Education/>
    </Element>
  </div>
  );
}

export default App;
