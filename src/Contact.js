import "./App.css";

import Navigation from "./Navigation";

import Footer from "./Footer";

import MapApi from "./MapApi";
import ContactForm from "./ContactForm";

// import certificate from "./img/certificate.jpg";

function Blog() {
  return (
    <>
      <section className="sub-head">
        <Navigation />
        <h1>Contact Us </h1>
      </section>

      <section className="map">
        <MapApi />
      </section>

      <section className="contact">
        <div className="row">
          <div className="contact-col">
            <div>
              <i class="fa-solid fa-house"></i>
              <span>
                <h5>Dublin City University, Collins Ave Ext</h5>
                <p>Dublin 9, Ireland</p>
              </span>
            </div>
            <div>
              <i class="fa-solid fa-phone"></i>
              <span>
                <h5>+353 1 700 5000</h5>
                <p>Monday to Friday, 9am - 5:30pm</p>
              </span>
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i>
              <span>
                <h5>info@dcu.com</h5>
                <p>Email your query</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
           <ContactForm/>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
