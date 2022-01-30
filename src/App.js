import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./pages/home";
import Log from "./pages/log";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
