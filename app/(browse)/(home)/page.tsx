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
import {
  Search,
  Grid,
  Bell,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  CheckCircle,
  Play,
  Film,
  ChevronDown,
} from "lucide-react";
import HeroSection from "./_components/hero";

export default function MovieDashboard() {
  return (
    <div className="flex items-start justify-between w-full max-w-400 overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 w-full p-8 overflow-hidden h-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Recommended For You Section */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Recommended For You</h3>
          <Link
            href="#"
            className="text-primary flex items-center gap-1 hover:underline"
            prefetch={false}
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      {/* Right News Panel */}
      <aside className="w-72 sticky top-0 p-6 flex-shrink-0">
        <Card className="bg-card border-primary border-2 rounded-xl overflow-hidden h-full flex flex-col">
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg?height=150&width=250"
              alt="News Image"
              width={320}
              height={180}
              className="w-full h-auto object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-primary mb-3">
                <CheckCircle className="w-5 h-5 fill-primary" />
                <h4 className="font-bold text-lg">Hot News</h4>
              </div>
              <p className="text-foreground mb-4 flex-grow text-sm">
                &quot;Slow Horses,&quot; the popular spy drama, has been renewed
                for a fifth season, much to the delight of its dedicated
                fanbase. The highly anticipated fourth season is set to premiere
                on September 4, 2024, promising more thrilling storylines and
                complex characters that viewers have come to love. Notable cast
                members, including the acclaimed Gary Oldman and Cillian Murphy,
                will continue to bring depth and intrigue to the series.
              </p>
              <div className="flex justify-between items-center text-muted-foreground text-xs">
                <span>25 July</span>
                <span>1/6</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
