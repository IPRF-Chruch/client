interface INavItem {
    title: string;
    href: string;
}

interface INavSocial {
    icon: string;
    href: string;
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
        href: "/contact",
    },
    {
        title: "Warta Jemaat",
        href: "/contact",
    },
    {
        title: "Contact",
        href: "/contact",
    }
];

export const NavigationSocial: INavSocial[] = [
    {
        icon: "mdi-youtube",
        href: "http://www.youtube.com/@cgcg5373"
    },
    {
        icon: "brandico:facebook-rect",
        href: "https://www.facebook.com/joyceyoan.lakawa"
    },
]