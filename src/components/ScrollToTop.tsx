import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (e.g. /contact#contact-form), try to scroll to the element.
    if (hash) {
      // Wait a tick for the page to render
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        const nav = document.querySelector("nav");
        const offset = nav ? (nav as HTMLElement).offsetHeight : 0;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - offset - 16;
          window.scrollTo({ top, behavior: "smooth" });
          return;
        }
        // Fallback to top
        window.scrollTo(0, 0);
      }, 50);
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
