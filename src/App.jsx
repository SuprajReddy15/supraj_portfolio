import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumePage from "./pages/Resumepage";
import "./index.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
