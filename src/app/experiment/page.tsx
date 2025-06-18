import { client } from "../../../libs/client";
import { Index } from "../../features/experiment/index";

import type { ExperimentType } from "../../types/works";
import type React from "react";

export default async function Experiment() {
  const rawData = await client.get({
    endpoint: "experiment",
    queries: { limit: 50 },
  });

  const data = rawData.contents.map((item: ExperimentType) => {
    return {
      type: "experiment",
      title: item.title,
      image: item.image,
      href: item.href,
      gitLink: item.gitLink,
    };
  });

  return <Index data={data} />;
}
