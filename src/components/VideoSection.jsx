import React from "react";
import "../styles/VideoSection.css";

function VideoSection() {
  return (
    <section className="videoSection__section">
      <div>
        <iframe
          width="960"
          height="500"
          src="https://www.youtube.com/embed/3O-e5viscs8?si=i27x4r6Y4D9ZQtGM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="videoSection__heading">
        <div className="videoSection__heading-sub">
          <h2>the hydrant</h2>
          <h2>philosophy</h2>
          <p>
            Hear from our co-founder, John, about what sets Hydrant apart, as we
            strive to create the most effective, science-backed lineup of
            wellness products.
          </p>
          <button className="learnMore-btn">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
