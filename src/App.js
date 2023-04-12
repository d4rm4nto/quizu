import "./style/style.css";

import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { Pendaftaran } from './pages/Pendaftaran';
import { Login } from './pages/Login';
import { Quiz } from "./pages/Quiz";
import { MateriQuiz } from "./pages/MateriQuiz";
import SoalQuiz from "./pages/SoalQuiz";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/materiquiz" element={<MateriQuiz />} />
        <Route path="/tomblaksibwh" element={<SoalQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
