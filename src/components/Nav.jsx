import React from "react";
import "../styles/Nav.css";
import cart from "../images/cart.svg";
import logoIcon from "../images/logoIcon.svg";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <ul className="nav__ul">
          <li>shop</li>
          <li>learn</li>
        </ul>
        <div>
          <h2 className="nav__logo">
            <img src={logoIcon} alt="logo" width={32} />
            hydrant
          </h2>
        </div>

        <div>
          <ul className="nav__ul">
            <li>Find Us</li>
            <li>
              <img src={cart} alt="cart" width={26} />
              bag
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
