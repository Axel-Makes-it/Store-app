import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Nav.css";
import cart from "../images/cart.svg";
import logoIcon from "../images/logoIcon.svg";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <ul className="nav__ul">
          <Link to="/">
            <li id="home">home</li>
          </Link>
          <li id="shop">shop</li>
        </ul>
        <div>
          <h2 className="nav__logo">
            <img src={logoIcon} alt="logo" width={32} />
            hydrant
          </h2>
        </div>

        <div>
          <ul className="nav__ul">
            <li id="findUs">Find Us</li>
            <li id="bag">
              <Link to="/cart">
                <img src={cart} alt="cart" width={26} />
                bag
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
