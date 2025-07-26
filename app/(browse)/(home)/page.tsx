import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import HeroSection from "./_components/hero";
import NewsPanel from "./_components/aside";
import ArrowRight from "@/public/icons/arrow-right";
import MovieCard from "@/components/shared/movie-card/movie-card";

export default function MovieDashboard() {
  return (
    <div className="flex items-start justify-between w-full max-w-400 overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 w-full pt-6 overflow-hidden h-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Recommended For You Section */}
        <div className="w-full flex items-center justify-between flex-col gap-y-6 my-6">
          <div className="w-full flex items-center justify-between font-baloo2">
            <h3 className="text-3xl font-bold ">Recommended For You</h3>
            <Link
              href="#"
              className="flex items-center gap-1 text-xl hover:underline"
              prefetch={false}
            >
              View All <ArrowRight className="text-primary" />
            </Link>
          </div>
          <div className="w-full flex items-centere justify-center gap-2">
            <MovieCard />
          </div>
        </div>
      </main>

      {/* Right News Panel */}
      <NewsPanel />
    </div>
  );
}
