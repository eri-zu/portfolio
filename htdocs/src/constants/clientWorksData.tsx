import type { ClientWorks } from "../types/works";

const rawClientWorksData: Array<ClientWorks> = [
  {
    title: "My Portfolio site",
    name: "myportfolio",
    href: "/",
    tags: ["Next.js", "TypeScript", "React Three Fiber", "glsl"],
    date: "2025",
    gitLink: "",
  },
  {
    title: "Mr. Shigeta's Portfolio site",
    name: "shigeta",
    href: "https://shigetanoreizouko.com/",
    tags: ["Vanilla JS", "PixiJS", "barba.js", "WordPress", "HTML / CSS"],
    date: "2024",
  },
  {
    title: "Mirror of Hythiol",
    name: "hythiol",
    href: "/videos/hythiol.mp4",
    tags: ["Vanilla JS", "three.js", "glsl", "HTML / CSS"],
    date: "2024",
  },
  {
    title: "Bifesta",
    name: "bifesta",
    href: "https://www.bifesta.jp/",
    tags: ["Vanilla JS", "three.js", "GLSL", "HTML / CSS"],
    date: "2024",
  },
  {
    title: "OASTBLUE",
    name: "oastblue",
    href: "https://oastblue.com/",
    tags: ["Vanilla JS", "three.js", "GLSL", "HTML / CSS"],
    date: "2024",
  },
  {
    title: "Menicon",
    name: "menicon",
    href: "/videos/menicon.mp4",
    tags: ["Next.js", "Canvas 2D"],
    date: "2023",
  },
  {
    title: "Yellow Hat",
    name: "yellowhat",
    href: "/videos/yellowhat.mp4",
    tags: ["Vanilla JS", "HTML / CSS"],
    date: "2023",
  },
];

export const ClientWorksData: Array<ClientWorks> = rawClientWorksData.map(
  (item) => ({
    ...item,
    type: "client",
  })
);
