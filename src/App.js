import "./style/style.css";

import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pendaftaran } from "./pages/Pendaftaran";
import { Login } from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
