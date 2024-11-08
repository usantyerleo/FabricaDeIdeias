import '../src/styles/Footer.css'
import Home from './pages/Home.jsx';
import Sobremim from './pages/sobremim.jsx';
import Colabore from './pages/colabore.jsx'
import Catalogo from './pages/catalogo.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobremim" element={<Sobremim />} />
          <Route path="/Colabore" element={<Colabore />} />
          <Route path="/Catalogo" element={<Catalogo />} />
        </Routes>
      </Router>
    );
  }

export default App
