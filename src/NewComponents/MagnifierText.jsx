import { useRef } from "react";

export default function MagnifierText() {
  const containerRef = useRef(null);
  const magnifierRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move magnifier
    magnifierRef.current.style.left = `${x}px`;
    magnifierRef.current.style.top = `${y}px`;

    // Move inner magnified text
    textRef.current.style.left = `${-x * 2.8 + 60}px`;
    textRef.current.style.top = `${-y * 2 + 60}px`;
  };

  return (
    <div className="magnifier-wrapper">
      <div
        ref={containerRef}
        className="magnifier-container"
        onMouseMove={handleMouseMove}
      >
        Magnify This Text Effect

        <div ref={magnifierRef} className="magnifier">
          <span ref={textRef}>
            Magnify This Text Effect
          </span>
        </div>
      </div>
    </div>
  );
}
