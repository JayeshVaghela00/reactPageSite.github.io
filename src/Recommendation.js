import "./App.css";

import user1 from "./img/user1.jpg";
import user2 from "./img/user2.jpg";

function Recommendation() {
  return (
    <>
      <section className="recommendation">
        <h1>Student's Review</h1>

        <p>The href attribute requires a valid value to be accessible.</p>

        <div className="row">
          <div className="recommendation-col">
            <img src={user1} alt="" />
            <div>
              <p>
                Note that the development build is not optimized. To create a
                production build, use npm run build. Note that the development
                build is not optimized. To create a production build, use npm
                run build.
              </p>

              <h3>Natalia Cerny</h3>
            </div>
          </div>
          <div className="recommendation-col">
            <img src={user2} alt="" />
            <div>
              <p>
                Note that the development build is not optimized. To create a
                production build, use npm run build. Note that the development
                build is not optimized. To create a production build, use npm
                run build.
              </p>

              <h3>Smith William</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommendation;
