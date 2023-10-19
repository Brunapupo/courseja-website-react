import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Footer";

import Home from "./pages/Home";
import Doacao from "./pages/Doacao";

import Container from "./layout/Container";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doacao" element={<Doacao />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
