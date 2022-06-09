import "./App.css";

import library from "./img/library.png";

import cafeteria from "./img/cafeteria.png";

import basketball from "./img/basketball.png";

function FacilitiesCard() {
  return (
    <>
      <div className="row">
        <div className="facilities-col">
          <img src={library} alt="" />
          <h2>World Class Library</h2>
          <p>
            Note that the development build is not optimized. To create a
            production build
          </p>
        </div>
        <div className="facilities-col">
          <img src={basketball} alt="" />

          <h2>Biggest Basketball Area</h2>
          <p>
            Note that the development build is not optimized. To create a
            production build
          </p>
        </div>
        <div className="facilities-col">
          <img src={cafeteria} alt="" />

          <h2>Best Cafeteria</h2>
          <p>
            Note that the development build is not optimized. To create a
            production build
          </p>
        </div>
      </div>
    </>
  );
}

export default FacilitiesCard;
