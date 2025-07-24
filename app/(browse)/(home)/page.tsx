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

export default function MovieDashboard() {
  return (
    <>
      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Top Navigation */}
        {/* <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-card"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Tabs defaultValue="all" className="w-[400px]">
              <TabsList className="bg-card rounded-full p-1">
                <TabsTrigger
                  value="all"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="movie"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Movie
                </TabsTrigger>
                <TabsTrigger
                  value="series"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Series
                </TabsTrigger>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <TabsTrigger
                      value="genres"
                      className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      Genres <ChevronDown className="ml-1 h-4 w-4" />
                    </TabsTrigger>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border-border text-foreground">
                    <DropdownMenuItem>Action</DropdownMenuItem>
                    <DropdownMenuItem>Comedy</DropdownMenuItem>
                    <DropdownMenuItem>Drama</DropdownMenuItem>
                    <DropdownMenuItem>Fantasy</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search the series, movies ..."
                className="pl-10 pr-4 py-2 rounded-full bg-card border-border text-foreground focus:ring-primary focus:border-primary w-64"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-card"
            >
              <Grid className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:bg-card"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Avatar className="w-10 h-10 border-2 border-primary">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="User Avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div> */}

        {/* Hero Section */}
        {/* <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Game of Thrones"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent p-8 flex flex-col justify-end">
            <h2 className="text-4xl font-bold mb-2">Game of Thrones</h2>
            <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
              <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded-md font-semibold">
                IMDb 9.2
              </span>
              <span>Action</span>
              <span>•</span>
              <span>Adventure</span>
              <span>•</span>
              <span>Drama</span>
            </div>
            <p className="max-w-lg text-foreground mb-6 text-sm">
              It&apos;s the story of the intricate and bloody battles of several
              noble families in the fictional land of Westeros. These families,
              including the Starks, the Lannisters, and the Targaryens, fight
              for control of the Iron Throne, the symbol of power in the Seven
              Kingdoms.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-full font-semibold">
                <Play className="w-5 h-5 mr-2" />
                WATCH
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-full font-semibold bg-transparent"
              >
                <Film className="w-5 h-5 mr-2" />
                Trailer
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-card/70 text-primary hover:bg-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-card/70 text-primary hover:bg-card"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div> */}

        {/* Recommended For You Section */}
        {/* <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Recommended For You</h3>
          <Link
            href="#"
            className="text-primary flex items-center gap-1 hover:underline"
            prefetch={false}
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div> */}
        {/* <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {[
            {
              title: "Hotel Transylvania",
              genre: "Animation, Comedy",
              rating: "7.0/10",
              image: "/placeholder.svg?height=300&width=200",
            },
            {
              title: "Lucifer",
              genre: "Crime, Drama, Fantasy",
              rating: "8.1/10",
              image: "/placeholder.svg?height=300&width=200",
            },
            {
              title: "Gangs of London",
              genre: "Action, Drama, Crime",
              rating: "8.0/10",
              image: "/placeholder.svg?height=300&width=200",
            },
            {
              title: "House of the Dragon",
              genre: "Action, Adventure, Fantasy",
              rating: "8.4/10",
              image: "/placeholder.svg?height=300&width=200",
            },
            {
              title: "The Witcher",
              genre: "Action, Adventure, Fantasy",
              rating: "8.2/10",
              image: "/placeholder.svg?height=300&width=200",
            },
            {
              title: "Arcane",
              genre: "Animation, Action, Adventure",
              rating: "9.0/10",
              image: "/placeholder.svg?height=300&width=200",
            },
          ].map((movie, index) => (
            <Card
              key={index}
              className="w-[200px] flex-shrink-0 bg-card border-border rounded-lg overflow-hidden"
            >
              <CardContent className="p-0 relative">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  width={200}
                  height={300}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-background/70 text-primary text-xs px-2 py-1 rounded-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary" />
                  {movie.rating}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 text-foreground hover:text-destructive"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <div className="p-3">
                  <h4 className="font-semibold text-base mb-1">
                    {movie.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{movie.genre}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </main>

      {/* Right News Panel */}
      {/* <aside className="w-80 bg-sidebar p-6 border-l border-sidebar-border flex-shrink-0">
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
      </aside> */}
    </>
  );
}
