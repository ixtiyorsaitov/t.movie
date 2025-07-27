"use client";

import Link from "next/link";
import NewsPanel from "./_components/aside";
import ArrowRight from "@/public/icons/arrow-right";
import MovieCard from "@/components/shared/movie-card/movie-card";
import useResponsive from "@/hooks/use-responsive";
import { cn } from "@/lib/utils";
import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";
import HeroSection from "./_components/hero";
import MoviesSection from "@/components/shared/movie-card/movies-section";
import { FILMS } from "@/lib/constants";

export default function HomePage() {
  const responsive1200 = useResponsive(1200);
  const responsiveSidebarBreakPoint = useResponsive(MOBILE_BREAKPOINT);
  return (
    <div className="flex items-start justify-between w-full max-w-400 overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 w-full pt-6 overflow-hidden h-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Recommended For You Section */}
        <MoviesSection title="Recommended For You" datas={FILMS} />
      </main>

      {/* Right News Panel */}
      {!responsiveSidebarBreakPoint && <NewsPanel />}
    </div>
  );
}
