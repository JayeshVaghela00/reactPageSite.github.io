import "./App.css";

import Navigation from "./Navigation";

import Footer from "./Footer";
import Form from "./Form";


import certificate from "./img/certificate.jpg";

function Blog() {
  return (
    <>
      <section className="sub-head">
        <Navigation />
        <h1>Our Certificate & Online Programs </h1>
      </section>

      <section className="blog">
        <div className="row">
          <div className="blog-left">
            <img src={certificate} />
            <h1>Our Certificate & Online Programs </h1>
            <p>
              By design, using the KMS activation method, the system contacts
              the registered server every 7 days, and if contacted successfully
              it will automatically renew and reset the activation for the the
              full period of 180 days again, starting from the day of successful
              contact. If the system cannot contact the server, it will be
              deactivated after 180 days and it will remain deactivated until
              contact can be restored.
            </p>
            <br />
            <p>
              The KMS servers I've added have been working steadily for two to
              three years, but there can be no guarantee that they will remain
              online indefinitely. If a registered server goes down, you will
              need to create a renewal task, or do a manual renewal, for the
              lifetime of the activation. Why should you choose the Online KMS
              activation method over offline KMS? The main benefit of Online KMS
              activation is that it doesn't need any KMS binary file and system
              can be activated using some manual commands or transparent batch
              script files. So this is for those who don't like/have
              difficulties/trust issue in offline KMS because of its binary
              files and antivirus detections.
            </p>
            <br />
            <p>
              After activation, it leaves only the KMS Server name in the
              registry, which helps you to get the above-mentioned global
              activation feature whereby the system auto-renews the activations,
              so it's a good thing if you leave the server name in the registry.
              However, you can clear this registered KMS Server name upon
              activation, and do that, open the script with notepad and set
              Clear-KMS-Cache to 1 from 0. What is left in the system when
              Renewal methods are installed, has been mentioned.
            </p>
            <br />
            <p>
              Run this file whenever the system needs activation. Depending upon
              the particular (never fully-knowable) circumstances, a successful
              activation may last for a period of a MINIMUM of 180 days, or a
              maximum of the full life of the machine it's running on, and you
              may never need to run it again.
            </p>

        <Form/>

          </div>
          <div className="blog-right">
            <h3>Post Categories</h3>
            <div className="one">
              <span>Machine Learning</span>
              <span>8</span>
            </div>
            <div className="two">
              <span>Computer Science</span>
              <span>18</span>
            </div>
            <div className="one">
              <span>Law</span>
              <span>21</span>
            </div>
            <div className="two">
              <span>Finance</span>
              <span>23</span>
            </div>
            <div className="one">
              <span>Business</span>
              <span>28</span>
            </div>
            <div className="two">
              <span>Engineering</span>
              <span>35</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
