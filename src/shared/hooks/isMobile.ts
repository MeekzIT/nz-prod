import { useEffect, useState } from "react";

const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = useState(false); // Начальное значение без `window`

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    setIsMobile(mediaQuery.matches); // Установить значение при монтировании

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
