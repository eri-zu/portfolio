"use client";

import { Works } from "../../components/layouts/works";
import { ExperimentData } from "../../constants/experimentData";
import { TitleAreaData } from "../../constants/titleAreaData";

import type React from "react";

export const Index: React.FC = () => {
  return <Works data={TitleAreaData[1]} worksData={ExperimentData}></Works>;
};
