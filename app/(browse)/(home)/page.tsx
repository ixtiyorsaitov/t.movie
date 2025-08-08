"use client";

import NewsPanel from "./_components/aside";
import HeroSection from "./_components/hero";
import MoviesSection from "@/components/shared/movie-card/movies-section";
import { FILMS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="flex items-start justify-between w-full overflow-hidden px-3">
      {/* Main Content Area */}
      <main className="flex-1 w-full pt-6 overflow-hidden h-full">
        {/* Hero Section */}
        <HeroSection />
        {/* <HeroLoading /> */}

        {/* Recommended For You Section */}
        <MoviesSection title="Recommended For You" datas={FILMS} />
      </main>

      {/* Right News Panel */}
      <div className="hidden lg:block">
        <NewsPanel />
      </div>
    </div>
  );
}
