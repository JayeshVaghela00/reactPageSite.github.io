import "./App.css";

import FacilitiesCard from "./FacilitiesCard";

import CampusCard from "./CampusCard";

import CourseCard from "./CourseCard";

import Footer from "./Footer";

import Navigation from "./Navigation";
import Recommendation from "./Recommendation";

const Home = () => {
  return (
    <>
      {/* ----------Nav Section--------- */}
      <section className="header">
        <Navigation />

        <div className="content-box">
          <h1>World's Biggest University</h1>
          <p>
            The href attribute requires a valid value to be accessible. Provide
            a valid, navigable address as the href value. <br />
            If you cannot provide a valid value to be accessible
          </p>
          <a className="hero-btn" href="">
            Visit Us to Know More
          </a>
        </div>
      </section>

      {/* ---------Courses---------- */}

      <section className="course">
        <h1>Course we offer</h1>

        <p> Provide a valid, navigable address as the href value.</p>

        <div className="new-card">
          <CourseCard />
        </div>
      </section>

      {/* ---------Campus---------- */}

      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>The href attribute requires a valid value to be accessible.</p>

        <CampusCard />
      </section>

      {/* ---------Facilities---------- */}

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>The href attribute requires a valid value to be accessible.</p>

        <FacilitiesCard />
      </section>

      {/* ---------Recommendation---------- */}

      <Recommendation />

      {/* ---------Inquiry---------- */}

      <section className="inquiry">
        <h1>
          Enroll For Our Various Online Courses <br /> the Anywhere From The
          World
        </h1>

        <a href="" className="hero-btn">
          Contact Us
        </a>
      </section>

      {/* ----------Footer---------- */}
      <Footer />
    </>
  );
};

export default Home;
