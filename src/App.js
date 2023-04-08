import "./style/style.css"

import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Pendaftaran } from './pages/Pendaftaran';
import { Login } from './pages/Login';
import { Aboute } from "./pages/Aboute";
import { Quiz } from "./pages/Quiz";
import { MateriQuiz } from "./pages/MateriQuiz";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/materiquiz" element={<MateriQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
