import React from "react";
import Nav from "./Nav";
import "../styles/CartPage.css";

function cartPage() {
  return (
    <section className="cartPage__section">
      <Nav />
      <div className="cartPage__cart">
        <div className="bag__summary">
          <h2>My Bag</h2>
        </div>
        <div className="total">
          <h2>
            <h2>Total</h2>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default cartPage;
