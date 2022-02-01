import ColorDisplay from "./Components/ColorDisplay";
import ColorInput from "./Components/ColorInput";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  return (
    <div className="App">
      <ColorDisplay colorValue={colorValue} />
      <ColorInput colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
