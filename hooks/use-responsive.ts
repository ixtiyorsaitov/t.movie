"use client";

import { useState, useEffect } from "react";

const useResponsive = (breakpoint: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Serverda ishlashini oldini olish

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);

  return isMobile;
};

export default useResponsive;
