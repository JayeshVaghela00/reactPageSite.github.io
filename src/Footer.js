import "./App.css";

function footer() {
  return (
    <>
      <section className="footer">
        <h3>About Us</h3>
        <p>
          The href attribute requires a valid value to be accessible. Provide a
          valid navigable address as the href value. <br />
          If you cannot provide a valid href, but still need the element to
          resemble a link.
        </p>

        <div className="icons">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <p className="react">
          Made with <i class="fa-brands fa-react"></i> By Jayesh
        </p>
      </section>
    </>
  );
}

export default footer;
