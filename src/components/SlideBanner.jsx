import React from "react";
import "../styles/SlideBanner.css";
import check from "../images/checkMark.png";

function SlideBanner() {
  const items = [
    "backed by science",
    "no artificial sweeteners or stevia",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "sleep on it.",
    "never run dry.",
    "supercharge your day.",
    "onwards and upwards.",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "backed by science",
    "no artificial sweeteners or stevia",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "sleep on it.",
    "never run dry.",
    "supercharge your day.",
    "onwards and upwards.",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "backed by science",
    "no artificial sweeteners or stevia",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "sleep on it.",
    "never run dry.",
    "supercharge your day.",
    "onwards and upwards.",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "backed by science",
    "no artificial sweeteners or stevia",
    "balanced electrolyte boost",
    "real fruit juice powder",
    "sleep on it.",
    "never run dry.",
    "supercharge your day.",
    "onwards and upwards.",
    "balanced electrolyte boost",
    "real fruit juice powder",
  ];

  return (
    <section className="slideBanner__section">
      <ul className="slideBanner__ul">
        {items.map((item, index) => (
          <li key={index}>
            <img src={check} alt="check" width={14} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SlideBanner;
