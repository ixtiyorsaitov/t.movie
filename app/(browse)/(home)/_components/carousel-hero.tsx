"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./styles.css";
import CarouselContent from "./carousel-content";

const DemoCarousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla mx-auto w-full mt-12 border h-[391px]" ref={emblaRef}>
      <div className="embla__container h-full">
        <div className="embla__slide flex items-center justify-center">
          <CarouselContent />
        </div>
        <div className="embla__slide flex items-center justify-center">
          <CarouselContent />
        </div>
      </div>
    </div>
  );
};

export default DemoCarousel;
