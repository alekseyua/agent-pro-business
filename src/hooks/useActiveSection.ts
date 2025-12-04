import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 350; // учёт sticky header
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // при монтировании
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
