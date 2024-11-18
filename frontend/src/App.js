import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import CustomCarousel from "./component/Carousel";
import CustomCard from "./component/Card";

function App() {
  return (
    <div>
      <CustomCarousel />
      <CustomCard />
    </div>
  );
}

export default App;
