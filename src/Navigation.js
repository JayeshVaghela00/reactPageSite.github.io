import "./App.css";

import logo from "./img/logo.png";

function Navigation() {
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} />{" "}
        </a>

        <div className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="./About">About Us</a>
            </li>
            <li>
              <a href="./Course">Course</a>
            </li>
            <li>
              <a href="./Blog">Blog</a>
            </li>
            <li>
              <a href="./Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
