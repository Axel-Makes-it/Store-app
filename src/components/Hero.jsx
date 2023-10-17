import React from "react";
import "../styles/Hero.css";
import mainHero from "../images/mainHero.png";
import mainHeroMobile from "../images/mainHeroMobile.png";

function Hero() {
  return (
    <section className="hero__section">
      <div className="hero__image-container">
        <img className="responsive hero__image" src={mainHero} alt="hero" />
        <img
          className="responsive hero__image-mobile"
          src={mainHeroMobile}
          alt="hero"
        />
        <div className="hero__heading-container">
          <h2>We don't water down.</h2>
          <h2>We water up.</h2>
          <div className="hero__subHeading">
            <span>Set your foundation with our simple wellness</span>
            <span>solutions. All hydration, no BS.</span>
          </div>
          <button className="hero__shopNow-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
