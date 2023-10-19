import React from "react";
import Banner from "../Banner";
import CarouselCourses from "../CarouselCourses";
import CarouselDirector from "../CarouselDirector";
import Container from "../layout/Container";

function Home() {
  return (
    <main>
      <Banner />
      <CarouselCourses />
      <CarouselDirector />
    </main>
  );
}

export default Home;
