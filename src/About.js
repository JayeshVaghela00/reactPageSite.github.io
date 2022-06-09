import "./App.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ab from "./img/about.jpg";

function About() {
  return (
    <>
      <section className="sub-head">
        <Navigation />

        <h1>About Us</h1>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world's Largest University</h1>
            <p>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.Declarative views make your code more predictable and
              easier to debug.Since component logic is written in JavaScript
              instead of templates, you can easily pass rich data through your
              app and keep state out of the DOM.
            </p>
          </div>
          <div className="about-col">
            <img src={ab} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
