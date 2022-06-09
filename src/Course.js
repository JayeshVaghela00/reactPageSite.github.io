import "./App.css";

import CourseCard from "./CourseCard";

import Navigation from "./Navigation";

import Footer from "./Footer";

import FacilitiesCard from "./FacilitiesCard";

function Course() {
  return (
    <>
      <section className="sub-head">
        <Navigation />

        <h1>Our Courses</h1>
      </section>

      <section className="course">
        <h1>Course we offer</h1>

        <p> Provide a valid, navigable address as the href value.</p>

        <CourseCard />
      </section>
      
      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>The href attribute requires a valid value to be accessible.</p>
        <FacilitiesCard />
      </section>

      <Footer />
    </>
  );
}

export default Course;
