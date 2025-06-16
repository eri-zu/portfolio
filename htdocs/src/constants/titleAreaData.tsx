import type { TitleAreaType } from "../types/titleAreaType";

export const TitleAreaData: Array<TitleAreaType> = [
  {
    title: "ERI IZUTSU",
    descri: "Frontend Developer<br />with 4+ years of experience",
    navData: [
      {
        label: "Experiment",
        href: "/experiment/",
        blobVisible: false,
      },
      {
        label: "Client Work",
        href: "/clientwork/",
        blobVisible: false,
      },
    ],
  },
  {
    title: "EXPERIMENT",
    descri:
      "Self-initiated works created <br />for practice and skill development",
    navData: [
      {
        label: "TOP",
        href: "/",
        blobVisible: true,
      },
      {
        label: "Client Work",
        href: "/clientwork/",
        blobVisible: false,
      },
    ],
  },
  {
    title: "CLIENT WORK",
    descri: "Part of a project <br />I worked on professionally",
    navData: [
      {
        label: "TOP",
        href: "/",
        blobVisible: true,
      },
      {
        label: "Experiment",
        href: "/experiment/",
        blobVisible: false,
      },
    ],
  },
];
