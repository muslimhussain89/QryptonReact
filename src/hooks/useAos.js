import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const defaultOptions = {
  duration: 600,
  easing: "ease-in-out",
  // once: true,
  mirror: false,
  offset: 80,
};

/**
 * Initialize AOS once and refresh when layout settles (images, Swiper, fonts).
 * Do not call AOS.init() in child components — it breaks delayed animations in production.
 */
export function useAos(options = {}) {
  useEffect(() => {
    AOS.init({ ...defaultOptions, ...options });

    const refresh = () => {
      requestAnimationFrame(() => AOS.refresh());
    };

    refresh();

    const onLoad = () => refresh();
    if (document.readyState === "complete") {
      setTimeout(refresh, 100);
    } else {
      window.addEventListener("load", onLoad);
    }

    const layoutTimer = setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(layoutTimer);
    };
  }, []);
}

export function refreshAos() {
  requestAnimationFrame(() => AOS.refresh());
}
