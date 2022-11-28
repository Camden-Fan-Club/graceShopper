import { useState } from "react";
import "./App.css";
import Items from "./components/Items";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Items />
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
