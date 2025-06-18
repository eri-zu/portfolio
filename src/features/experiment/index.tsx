"use client";

import { Works } from "../../components/layouts/works";
import { TitleAreaData } from "../../constants/titleAreaData";

import type { ExperimentType } from "../../types/works";
import type React from "react";

type Props = {
  data: Array<ExperimentType>;
};

export const Index: React.FC<Props> = ({ data }) => {
  return <Works data={TitleAreaData[1]} worksData={data}></Works>;
};
