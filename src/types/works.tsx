type Image = {
  url: string;
  height: number;
  width: number;
};

export type ExperimentType = {
  type: string;
  title: string;
  image: Image;
  href: string;
  gitLink?: string;
};

export type ClientWorksType = {
  type: string;
  title: string;
  image: Image;
  href: string;
  gitLink?: string;
  tags: Array<string>;
  year?: string;
};
