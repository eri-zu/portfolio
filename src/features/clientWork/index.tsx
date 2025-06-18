"use client";

import { Works } from "../../components/layouts/works";
import { TitleAreaData } from "../../constants/titleAreaData";

import type { ClientWorksType } from "../../types/works";
import type React from "react";

type Props = {
  data: Array<ClientWorksType>;
};

export const Index: React.FC<Props> = ({ data }) => {
  return <Works data={TitleAreaData[2]} worksData={data}></Works>;
};
