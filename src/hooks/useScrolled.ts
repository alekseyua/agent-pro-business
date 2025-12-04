// src/components/Header/useScrolled.ts
import { useEffect, useState } from "react";

export function useScrolled(threshold: number = 10): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll(); // при монтировании
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
