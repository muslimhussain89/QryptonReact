import { useEffect } from "react";
import "./GalaxyButton.css";

const RANDOM = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export default function GalaxyButton() {
  useEffect(() => {
    const particles = document.querySelectorAll(".star");

    particles.forEach((p) => {
      p.style.setProperty("--angle", RANDOM(0, 360));
      p.style.setProperty("--duration", RANDOM(6, 20));
      p.style.setProperty("--delay", RANDOM(1, 10));
      p.style.setProperty("--alpha", RANDOM(40, 90) / 100);
      p.style.setProperty("--size", RANDOM(2, 6));
      p.style.setProperty("--distance", RANDOM(40, 200));
    });
  }, []);

  return (
    <div className="galaxy-button">
      <button>
        <span className="spark"></span>
        <span className="backdrop"></span>

        <span className="galaxy__container">
          <span className="star star--static"></span>
          <span className="star star--static"></span>
          <span className="star star--static"></span>
          <span className="star star--static"></span>
        </span>

        <span className="galaxy">
          <span className="galaxy__ring">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="star"></span>
            ))}
          </span>
        </span>

        <span className="text">Explore</span>
      </button>

      <div className="bodydrop"></div>
    </div>
  );
}
