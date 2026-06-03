import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const circleEl = circleRef.current;

    let mouseX = 0,
      mouseY = 0; // real mouse
    let curX = 0,
      curY = 0; // animated pos
    const speed = 0.15;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onOver = (e) => {
      if (e.target.closest("a")) {
        cursorEl.classList.add("hovered");
        circleEl.classList.add("hovered");
      }
    };

    const onOut = (e) => {
      if (e.target.closest("a")) {
        cursorEl.classList.remove("hovered");
        circleEl.classList.remove("hovered");
      }
    };

    // 💧 Water ripple effect on click
    const onClick = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      // remove ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const animate = () => {
      curX += (mouseX - curX) * speed;
      curY += (mouseY - curY) * speed;

      cursorEl.style.transform = `translate(${curX - 5}px, ${curY - 5}px)`;
      circleEl.style.transform = `translate(${curX - 18}px, ${curY - 16}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("click", onClick);

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="circle" ref={circleRef} />
    </>
  );
}
