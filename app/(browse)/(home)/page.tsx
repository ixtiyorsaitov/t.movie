"use client";

import NewsPanel from "./_components/aside";
import useResponsive from "@/hooks/use-responsive";
import { MOBILE_BREAKPOINT } from "@/hooks/use-mobile";
import HeroSection from "./_components/hero";
import MoviesSection from "@/components/shared/movie-card/movies-section";
import { FILMS } from "@/lib/constants";

export default function HomePage() {
  const responsiveSidebarBreakPoint = useResponsive(MOBILE_BREAKPOINT);
  return (
    <div className="flex items-start justify-between w-full max-w-400 overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 w-full pt-6 overflow-hidden h-full">
        {/* Hero Section */}
        <HeroSection />
        {/* <HeroLoading /> */}

        {/* Recommended For You Section */}
        <MoviesSection title="Recommended For You" datas={FILMS} />
      </main>

      {/* Right News Panel */}
      {!responsiveSidebarBreakPoint && <NewsPanel />}
    </div>
  );
}
