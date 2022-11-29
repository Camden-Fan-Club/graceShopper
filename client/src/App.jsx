import { useState } from "react";
import "./App.css";
import Items from "./components/Items";
import NavBar from "./components/NavBar";
import Homepage from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/items" element={<Items />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
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
