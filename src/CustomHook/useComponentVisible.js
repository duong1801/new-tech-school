import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickInside = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      setIsComponentVisible(true);
    } else {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickInside, true);
    return () => {
      document.removeEventListener("click", handleClickInside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
