"use client";

import { Works } from "../../components/layouts/works";
import { ClientWorksData } from "../../constants/clientWorksData";
import { TitleAreaData } from "../../constants/titleAreaData";

import type React from "react";

export const Index: React.FC = () => {
  return <Works data={TitleAreaData[2]} worksData={ClientWorksData}></Works>;
};
