export type Experiment = {
  type?: "experiment";
  title: string;
  name: string;
  href: string;
  gitLink?: string;
  tags?: Array<string>;
  date?: string;
};

export type ClientWorks = {
  type?: "client";
  title: string;
  name: string;
  href: string;
  gitLink?: string;
  tags: Array<string>;
  date: string;
};
