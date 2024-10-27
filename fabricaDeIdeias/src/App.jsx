import '../src/styles/Footer.css'
import Home from './pages/HomeBottom.jsx';
import Sobremim from './pages/sobremim.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobremim" element={<Sobremim />} />

        </Routes>
      </Router>
    );
  }

export default App
