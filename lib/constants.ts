import ArtistIcon from "@/public/icons/artists-icon";
import BlogIcon from "@/public/icons/blog-icon";
import ContactUsIcon from "@/public/icons/contact-us-icon";
import DiscoverIcon from "@/public/icons/discover-icon";
import HelpCenterIcon from "@/public/icons/help-center-icon";
import SettingIcon from "@/public/icons/setting-icon";
import WatchListIcon from "@/public/icons/watchlist-icon";

export const SIDEBAR_ITEMS = {
  group1: [
    {
      id: 1,
      name: "Discover",
      icon: DiscoverIcon,
      href: "/",
    },
    {
      id: 2,
      name: "Watchlist",
      icon: WatchListIcon,
      href: "/watchlist",
    },
    {
      id: 3,
      name: "Blog",
      icon: BlogIcon,
      href: "/blog",
    },
    {
      id: 4,
      name: "Artists",
      icon: ArtistIcon,
      href: "/artists",
    },
  ],
  group2: [
    {
      id: 5,
      name: "Contact Us",
      icon: ContactUsIcon,
      href: "contact-us",
    },
    {
      id: 6,
      name: "Help Center",
      icon: HelpCenterIcon,
      href: "/help-center",
    },
    {
      id: 7,
      name: "Setting",
      icon: SettingIcon,
      href: "/settings",
    },
  ],
};

export const NAVIGATION_ITEMS = [
  {
    id: 1,
    name: "All",
    type: "all",
  },
  {
    id: 2,
    name: "Movie",
    type: "movie",
  },
  {
    id: 3,
    name: "Series",
    type: "series",
  },
];

export const GENRES = [
  {
    id: 1,
    name: "Action",
    slug: "action",
  },
  {
    id: 2,
    name: "Comedy",
    slug: "comedy",
  },
  {
    id: 3,
    name: "Fantasy",
    slug: "fantasy",
  },
  {
    id: 4,
    name: "Mystery",
    slug: "mystery",
  },
  {
    id: 5,
    name: "Spy",
    slug: "spy",
  },
  {
    id: 6,
    name: "Adventure",
    slug: "adventure",
  },
  {
    id: 7,
    name: "Crime",
    slug: "crime",
  },
  {
    id: 8,
    name: "Game Show",
    slug: "game-show",
  },
  {
    id: 9,
    name: "Romance",
    slug: "romance",
  },
  {
    id: 10,
    name: "Talk Show",
    slug: "talk-show",
  },
  {
    id: 11,
    name: "Animation",
    slug: "animation",
  },
  {
    id: 12,
    name: "Documentary",
    slug: "documentary",
  },
  {
    id: 13,
    name: "Historical",
    slug: "historical",
  },
  {
    id: 14,
    name: "Sci-Fi",
    slug: "sci-fi",
  },
  {
    id: 15,
    name: "Thriller",
    slug: "thriller",
  },
  {
    id: 16,
    name: "Anime",
    slug: "anime",
  },
  {
    id: 17,
    name: "Drama",
    slug: "drama",
  },
  {
    id: 18,
    name: "Horror",
    slug: "horror",
  },
  {
    id: 19,
    name: "Short",
    slug: "short",
  },
  {
    id: 20,
    name: "War",
    slug: "war",
  },
  {
    id: 21,
    name: "Biography",
    slug: "biography",
  },
  {
    id: 22,
    name: "Epic",
    slug: "epic",
  },
  {
    id: 23,
    name: "Musical",
    slug: "musical",
  },
  {
    id: 24,
    name: "Sports",
    slug: "sports",
  },
  {
    id: 25,
    name: "Western",
    slug: "western",
  },
];
