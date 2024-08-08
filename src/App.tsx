import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import Features from "./sections/Features";
import "./index.css";

function App() {
  return (
    <div className="bg-dark-bg font-primary pt-16 space-y-12">
    <NavBar />
    <Element name="home" className="z-50 mt-0">
      <div className="mb-8">
        <Home />
      </div>
    </Element>
    <Element name="features">
      <div className="mb-8">
        <Features />
      </div>
    </Element>
  </div>
  );
}

export default App;
