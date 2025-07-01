import { useEffect, useState } from "react";

export default function useScroll(treshold: number = 50) {
  const [isShow, setIsShow] = useState<true | false>(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (Math.abs(position - scrollPosition) > treshold) return;

      if (position > scrollPosition) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, treshold]);

  return isShow;
}
