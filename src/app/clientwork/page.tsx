import { client } from "../../../libs/client";
import { Index } from "../../features/clientWork/index";

import type { ClientWorksType } from "../../types/works";
import type React from "react";

export default async function ClientWork() {
  const rawData = await client.get({
    endpoint: "clientwork",
    queries: { limit: 50 },
  });

  const data = rawData.contents.map((item: ClientWorksType) => {
    return {
      type: "client",
      title: item.title,
      image: item.image,
      href: item.href,
      gitLink: item.gitLink,
      tags: item.tags,
      year: item.year,
    };
  });

  return <Index data={data} />;
}
