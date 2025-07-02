interface INavItem {
  title: string;
  href: string;
}

interface INavSocial {
  icon: string;
}

export const NavigationList: INavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Jadwal Ibadah",
    href: "/schedule",
  },
  {
    title: "Warta Jemaat",
    href: "/news",
  },
];

export const NavigationSocial: INavSocial[] = [
  {
    icon: "mdi-instagram",
  },
  {
    icon: "mdi-youtube",
  },
  {
    icon: "ic:baseline-tiktok",
  },
];
