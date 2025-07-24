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
