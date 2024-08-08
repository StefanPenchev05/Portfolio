import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import MyExperience from "./sections/MyExperience";
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
    <Element name="my-experience">
      <div className="mb-8">
        <MyExperience />
      </div>
    </Element>
  </div>
  );
}

export default App;
