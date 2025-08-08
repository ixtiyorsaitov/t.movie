import ArtistIcon from "@/public/icons/artists-icon";
import BlogIcon from "@/public/icons/blog-icon";
import ContactUsIcon from "@/public/icons/contact-us-icon";
import DiscoverIcon from "@/public/icons/discover-icon";
import HelpCenterIcon from "@/public/icons/help-center-icon";
import SettingIcon from "@/public/icons/setting-icon";
import WatchListIcon from "@/public/icons/watchlist-icon";
import {
  FilmType,
  IComment,
  IFilm,
  IGenres,
  INotification,
  IUser,
} from "@/types";

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_URI;

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

export const COMMENTS: IComment[] = [
  {
    _id: "1",
    user: {
      _id: "1",
      name: "John Doe",
      meta: {
        likes: ["", ""],
        watchedList: ["", ""],
        submitList: ["", ""],
      },
    },
    score: 10,
    containSpoiler: true,
    film: {
      _id: "1",
      title: "Attack on Titan",
      description:
        "In a world where humanity is on the brink of extinction from Titans, Eren and his friends fight back.",
      type: FilmType.SERIES,
      rating: {
        avarage: 8.9,
        total: 4450,
        count: 500,
      },
      meta: {
        likes: 1200,
        watchList: 350,
      },
      slug: "attack-on-titan",
      published: true,
      image: "/assests/aot.jpg",
      additionImages: ["/assests/aot1.jpg", "/assests/aot2.jpg"],
      backgroundImage: "/assests/aot-bg.jpg",
      genres: [
        {
          _id: "1",
          name: "Action",
          slug: "action",
        },
        {
          _id: "17",
          name: "Drama",
          slug: "drama",
        },
      ],
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ullam.",

    parent: null,
    likes: 50,
  },
];

export const USERS: IUser[] = [
  {
    _id: "1",
    name: "John Doe",
    meta: {
      likes: ["", ""],
      watchedList: ["", ""],
      submitList: ["", ""],
    },
  },
];

export const NOTIFICATIONS: INotification[] = [
  {
    _id: "1",
    film: {
      _id: "1",
      title: "Attack on Titan",
      description:
        "In a world where humanity is on the brink of extinction from Titans, Eren and his friends fight back.",
      type: FilmType.SERIES,
      rating: {
        avarage: 8.9,
        total: 4450,
        count: 500,
      },
      meta: {
        likes: 1200,
        watchList: 350,
      },
      slug: "attack-on-titan",
      published: true,
      image: "/assests/aot.png",
      additionImages: ["/assests/aot1.jpg", "/assests/aot2.jpg"],
      backgroundImage: "/assests/aot-bg.jpg",
      genres: [
        {
          _id: "1",
          name: "Action",
          slug: "action",
        },
        {
          _id: "17",
          name: "Drama",
          slug: "drama",
        },
      ],
    },
    episode: 4,
    season: 3,
    read: false,
  },
  {
    _id: "2",
    film: {
      _id: "2",
      title: "Jujutsu Kaisen",
      description:
        "A high school student joins a secret organization to fight curses and save people from supernatural threats.",
      type: FilmType.SERIES,
      rating: {
        avarage: 8.7,
        total: 3900,
        count: 450,
      },
      meta: {
        likes: 950,
        watchList: 410,
      },
      slug: "jujutsu-kaisen",
      published: true,
      image: "/assests/jjk.jpg",
      additionImages: ["/assests/jjk1.jpg"],
      backgroundImage: "/assests/jjk-bg.jpg",
      genres: [
        {
          _id: "1",
          name: "Action",
          slug: "action",
        },
        {
          _id: "11",
          name: "Animation",
          slug: "animation",
        },
      ],
    },
    episode: 7,
    season: 2,
    read: false,
  },
  {
    _id: "3",
    film: {
      _id: "3",
      title: "Demon Slayer",
      description:
        "Tanjiro Kamado becomes a demon slayer after demons attack his family.",
      type: FilmType.SERIES,
      rating: {
        avarage: 8.6,
        total: 3600,
        count: 420,
      },
      meta: {
        likes: 1120,
        watchList: 500,
      },
      slug: "demon-slayer",
      published: true,
      image: "/assests/ds.jpg",
      backgroundImage: "/assests/ds-bg.jpg",
      genres: [
        {
          _id: "3",
          name: "Fantasy",
          slug: "fantasy",
        },
        {
          _id: "6",
          name: "Adventure",
          slug: "adventure",
        },
      ],
    },
    episode: 10,
    season: 1,
    read: true,
  },
  {
    _id: "4",
    film: {
      _id: "4",
      title: "Naruto",
      description:
        "Tanjiro Kamado becomes a demon slayer after demons attack his family.",
      type: FilmType.SERIES,
      rating: {
        avarage: 8.6,
        total: 3600,
        count: 420,
      },
      meta: {
        likes: 1120,
        watchList: 500,
      },
      slug: "naruto",
      published: true,
      image: "/assests/naruto.jpg",
      backgroundImage: "/assests/naruto-bg.jpg",
      genres: [
        {
          _id: "3",
          name: "Fantasy",
          slug: "fantasy",
        },
        {
          _id: "6",
          name: "Adventure",
          slug: "adventure",
        },
      ],
    },
    episode: 568,
    season: 1,
    read: true,
  },
];

export const FILMS: IFilm[] = [
  {
    _id: "1",
    title: "Attack on Titan",
    description:
      "In a world where humanity is on the brink of extinction from Titans, Eren and his friends fight back.",
    type: FilmType.SERIES,
    rating: {
      avarage: 8.9,
      total: 4450,
      count: 500,
    },
    meta: {
      likes: 1200,
      watchList: 350,
    },
    slug: "attack-on-titan",
    published: true,
    image: "/assests/aot.png",
    additionImages: ["/assests/aot1.jpg", "/assests/aot2.jpg"],
    backgroundImage: "/assests/aot-bg.jpg",
    genres: [
      {
        _id: "1",
        name: "Action",
        slug: "action",
      },
      {
        _id: "17",
        name: "Drama",
        slug: "drama",
      },
    ],
  },
  {
    _id: "2",
    title: "Jujutsu Kaisen",
    description:
      "A high school student joins a secret organization to fight curses and save people from supernatural threats.",
    type: FilmType.SERIES,
    rating: {
      avarage: 8.7,
      total: 3900,
      count: 450,
    },
    meta: {
      likes: 950,
      watchList: 410,
    },
    slug: "jujutsu-kaisen",
    published: true,
    image: "/assests/jjk.jpg",
    additionImages: ["/assests/jjk1.jpg"],
    backgroundImage: "/assests/jjk-bg.jpg",
    genres: [
      {
        _id: "1",
        name: "Action",
        slug: "action",
      },
      {
        _id: "11",
        name: "Animation",
        slug: "animation",
      },
    ],
  },
  {
    _id: "3",
    title: "Demon Slayer",
    description:
      "Tanjiro Kamado becomes a demon slayer after demons attack his family.",
    type: FilmType.SERIES,
    rating: {
      avarage: 8.6,
      total: 3600,
      count: 420,
    },
    meta: {
      likes: 1120,
      watchList: 500,
    },
    slug: "demon-slayer",
    published: true,
    image: "/assests/ds.jpg",
    backgroundImage: "/assests/ds-bg.jpg",
    genres: [
      {
        _id: "3",
        name: "Fantasy",
        slug: "fantasy",
      },
      {
        _id: "6",
        name: "Adventure",
        slug: "adventure",
      },
    ],
  },
  {
    _id: "4",
    title: "Naruto",
    description:
      "Tanjiro Kamado becomes a demon slayer after demons attack his family.",
    type: FilmType.SERIES,
    rating: {
      avarage: 8.6,
      total: 3600,
      count: 420,
    },
    meta: {
      likes: 1120,
      watchList: 500,
    },
    slug: "naruto",
    published: true,
    image: "/assests/naruto.jpg",
    backgroundImage: "/assests/naruto-bg.jpg",
    genres: [
      {
        _id: "3",
        name: "Fantasy",
        slug: "fantasy",
      },
      {
        _id: "6",
        name: "Adventure",
        slug: "adventure",
      },
    ],
  },
  {
    _id: "5",
    title: "Your name",
    description:
      "Tanjiro Kamado becomes a demon slayer after demons attack his family.",
    type: FilmType.MOVIE,
    rating: {
      avarage: 8.6,
      total: 3600,
      count: 420,
    },
    meta: {
      likes: 1120,
      watchList: 500,
    },
    slug: "your-name",
    published: true,
    image: "/assests/yn.jpg",
    backgroundImage: "/assests/yn-bg.jpg",
    genres: [
      {
        _id: "3",
        name: "Fantasy",
        slug: "fantasy",
      },
      {
        _id: "6",
        name: "Adventure",
        slug: "adventure",
      },
    ],
  },
  {
    _id: "6",
    title: "One Piece",
    description:
      "Monkey D. Luffy sails the Grand Line in search of the ultimate treasure, the One Piece.",
    type: FilmType.SERIES,
    rating: {
      avarage: 9.1,
      total: 6200,
      count: 700,
    },
    meta: {
      likes: 2000,
      watchList: 600,
    },
    slug: "one-piece",
    published: true,
    image: "/assests/op.jpg",
    backgroundImage: "/assests/op-bg.jpg",
    genres: [
      {
        _id: "6",
        name: "Adventure",
        slug: "adventure",
      },
      {
        _id: "2",
        name: "Comedy",
        slug: "comedy",
      },
    ],
  },
];

export const GENRES: IGenres[] = [
  {
    _id: "1",
    name: "Action",
    slug: "action",
  },
  {
    _id: "2",
    name: "Comedy",
    slug: "comedy",
  },
  {
    _id: "3",
    name: "Fantasy",
    slug: "fantasy",
  },
  {
    _id: "4",
    name: "Mystery",
    slug: "mystery",
  },
  {
    _id: "5",
    name: "Spy",
    slug: "spy",
  },
  {
    _id: "6",
    name: "Adventure",
    slug: "adventure",
  },
  {
    _id: "7",
    name: "Crime",
    slug: "crime",
  },
  {
    _id: "8",
    name: "Game Show",
    slug: "game-show",
  },
  {
    _id: "9",
    name: "Romance",
    slug: "romance",
  },
  {
    _id: "10",
    name: "Talk Show",
    slug: "talk-show",
  },
  {
    _id: "11",
    name: "Animation",
    slug: "animation",
  },
  {
    _id: "12",
    name: "Documentary",
    slug: "documentary",
  },
  {
    _id: "13",
    name: "Historical",
    slug: "historical",
  },
  {
    _id: "14",
    name: "Sci-Fi",
    slug: "sci-fi",
  },
  {
    _id: "15",
    name: "Thriller",
    slug: "thriller",
  },
  {
    _id: "16",
    name: "Anime",
    slug: "anime",
  },
  {
    _id: "17",
    name: "Drama",
    slug: "drama",
  },
  {
    _id: "18",
    name: "Horror",
    slug: "horror",
  },
  {
    _id: "19",
    name: "Short",
    slug: "short",
  },
  {
    _id: "20",
    name: "War",
    slug: "war",
  },
  {
    _id: "21",
    name: "Biography",
    slug: "biography",
  },
  {
    _id: "22",
    name: "Epic",
    slug: "epic",
  },
  {
    _id: "23",
    name: "Musical",
    slug: "musical",
  },
  {
    _id: "24",
    name: "Sports",
    slug: "sports",
  },
  {
    _id: "25",
    name: "Western",
    slug: "western",
  },
];
