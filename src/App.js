import "./style/style.css";

import { Routes, Route, Link } from "react-router-dom";
<<<<<<<<< Temporary merge branch 1
import { Home } from "./pages/Home";
import { Pendaftaran } from "./pages/Pendaftaran";
import { Login } from "./pages/Login";
import Quiz from "./pages/Quiz";
=========
import { Home } from './pages/Home';
import { Pendaftaran } from './pages/Pendaftaran';
import { Login } from './pages/Login';
import { Aboute } from "./pages/Aboute";
import { Quiz } from "./pages/Quiz";
import { MateriQuiz } from "./pages/MateriQuiz";



>>>>>>>>> Temporary merge branch 2

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/materiquiz" element={<MateriQuiz />} />
>>>>>>>>> Temporary merge branch 2
      </Routes>
    </div>
  );
}

export default App;
