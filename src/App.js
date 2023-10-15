import "./App.css";

import Header from "./Header";
import CarouselCourses from "./CarouselCourses";
import CarouselDirector from "./CarouselDirector";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselCourses />
      <CarouselDirector />
      <Footer />
    </div>
  );
}

export default App;
