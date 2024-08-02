import { Element } from "react-scroll";
import NavBar from "./components/NavBar"
import Home from "./sections/Home"
import "./index.css"

function App() {
  return (
    <div className="bg-dark-bg font-primary">
      <NavBar/>
      <Element name="home">
        <Home/>
      </Element>
    </div>
  );
}

export default App;
