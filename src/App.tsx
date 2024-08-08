import { Element } from "react-scroll";
import NavBar from "./components/NavBar"
import Home from "./sections/Home"
import MyExperience from "./sections/MyExperience";
import "./index.css"

function App() {
  return (
    <div className="bg-dark-bg font-primary space-y-12">
      <NavBar/>
      <Element name="home" className="z-50 mt-0">
        <Home/>
      </Element>
      <Element name="my-experience">
        <MyExperience/>
      </Element>
    </div>
  );
}

export default App;
