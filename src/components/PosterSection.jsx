import React from "react";
import "../styles/PosterSection.css";
import poster1 from "../images/1.png";
import poster2 from "../images/2.png";
import poster3 from "../images/3.png";
import poster4 from "../images/4.png";

const posters = [
  {
    title: "rise and shine (literally)",
    description:
      "Proper hydration is linked to optimal mental and physical performance. Jumpstart your day with a glass of HYDRATE.",
    image: poster1,
  },
  {
    title: "get at it",
    description:
      "Run, jump, fly, levitate... You can do it all with a strong, supported immune system.",
    image: poster2,
  },
  {
    title: "you’ve got vigor, kid",
    description:
      "And your middle names are - energy and enthusiasm. Midday slumps are a thing of the past.",
    image: poster3,
  },
  {
    title: "relax, you’ve earned it",
    description:
      "Hydration is key to proper sleep, and proper sleep means you can make $h!t happen tomorrow.",
    image: poster4,
  },
];

function PosterSection() {
  return (
    <section className="posterSection__section">
      <h2>your make it happen essentials</h2>
      <div className="posterSection__section-container">
        <div className="card-container">
          {posters.map((poster, index) => (
            <div className="posterSection__card" key={index}>
              <img src={poster.image} alt={poster.title} />
              <div className="posterSection__card-info">
                <h3>{poster.title}</h3>
                <p>{poster.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PosterSection;
