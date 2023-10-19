import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Banner";
import CarouselCourses from "./CarouselCourses";
import CarouselDirector from "./CarouselDirector";
import Footer from "./Footer";

import Home from "./pages/Home";
import Doacao from "./pages/Doacao";

import Container from "./layout/Container";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
        </Routes>
      </Container>

      <Banner />
      <CarouselCourses />
      <CarouselDirector />
      <Footer />
    </Router>
  );
}

export default App;
