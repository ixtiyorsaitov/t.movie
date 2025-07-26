"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./styles.css";
import CarouselContent from "./carousel-content";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DemoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="embla relative">
      <div
        className="embla-viewport mx-auto w-full border h-[391px] rounded-2xl overflow-hidden relative"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          <div className="embla__slide flex items-center justify-center">
            <CarouselContent />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <CarouselContent />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 flex gap-2">
        <Button
          onClick={scrollPrev}
          size="icon"
          className="rounded-full embla__prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          onClick={scrollNext}
          size="icon"
          className="rounded-full embla__next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default DemoCarousel;
