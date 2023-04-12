import "./style/style.css";

import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Pendaftaran } from './pages/Pendaftaran';
import { Login } from './pages/Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
