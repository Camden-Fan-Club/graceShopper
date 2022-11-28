import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          amount of paint {count}
        </button>
      </div>
    </div>
  );
}

export default App;
