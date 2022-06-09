import "./App.css";

import london from "./img/london.png";

import washington from "./img/washington.png";

import ny from "./img/newyork.png";

function CampusCard() {
  return (
    <>
      <div className="row">
        <div className="campus-col">
          <img src={london} alt="" />
          <div className="layer">
            <h2>London</h2>
          </div>
        </div>
        <div className="campus-col">
          <img src={ny} alt="" />
          <div className="layer">
            <h2>NewYork</h2>
          </div>
        </div>
        <div className="campus-col">
          <img src={washington} alt="" />
          <div className="layer">
            <h2>Washington</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampusCard;
