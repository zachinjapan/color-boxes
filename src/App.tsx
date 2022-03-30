import "./App.css";
import Box from "./Components/Box";
import { useState } from "react";
import { randomColorArray } from "./Utils/colorFunctions";
import { defaultColors } from "./Utils/colorFunctions";
function App() {
  // my goal: create a responsive layout that is extremely readable and self documenting

  const totalBoxes = 9;

  const [boxes, setBoxes] = useState([...defaultColors]);

  const randomizeBoxColors = () => {
    setBoxes(randomColorArray(totalBoxes));
  };

  return (
    <div className="App">
      <div className="container main-1">
        {boxes.slice(0, 4).map((box, index) => (
          <Box
            key={index}
            color={box.color}
            number={index + 1}
            onClick={() => {
              randomizeBoxColors();
            }}
          />
        ))}
      </div>
      <div className="container main-2">
        {boxes.slice(4, 9).map((box, index) => (
          <Box
            key={index}
            color={box.color}
            number={index + 5}
            onClick={() => {
              randomizeBoxColors();
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
