import type { Experiment } from "../types/works";

const rawExperimentData: Array<Experiment> = [
  {
    title: "Glitch effect",
    name: "glitch1",
    href: "https://eri-zu.github.io/experiment/glitch1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/glitch1",
  },
  {
    title: "GPGPU flow field",
    name: "gpgpu1",
    href: "https://eri-zu.github.io/experiment/gpgpu1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/gpgpu1",
  },
  {
    title: "Ripple effect",
    name: "ripple1",
    href: "https://eri-zu.github.io/experiment/ripple1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/ripple1",
  },
  {
    title: "Hologram",
    name: "hologram1",
    href: "https://eri-zu.github.io/experiment/hologram1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/hologram1",
  },
  {
    title: "Kinetic typography",
    name: "kinetic1",
    href: "https://eri-zu.github.io/experiment/kinetic1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/kinetic1",
  },
  {
    title: "Interactive particles",
    name: "particle1",
    href: "https://eri-zu.github.io/experiment/particle1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/particle1",
  },
  {
    title: "3D model morphing",
    name: "particle2",
    href: "https://eri-zu.github.io/experiment/particle2/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/particle2",
  },
  {
    title: "Infinite Image Gallery 2",
    name: "gallery2",
    href: "https://eri-zu.github.io/experiment/gallery2/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/gallery2",
  },
  {
    title: "Infinite Image Gallery 1",
    name: "gallery1",
    href: "https://eri-zu.github.io/experiment/gallery1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/gallery1",
  },
  {
    title: "Fullscreen animation",
    name: "fullscreen1",
    href: "https://eri-zu.github.io/experiment/fullscreen1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/fullscreen1",
  },
  {
    title: "Transition",
    name: "transition1",
    href: "https://eri-zu.github.io/experiment/transition1/dist/",
    gitLink: "https://github.com/eri-zu/experiment/tree/main/transition1",
  },
];

export const ExperimentData: Array<Experiment> = rawExperimentData.map(
  (item) => ({
    ...item,
    type: "experiment",
  })
);
