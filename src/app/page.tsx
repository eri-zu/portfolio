"use client";

import { Suspense } from "react";

import { Loading } from "../components/layouts/bg";
import { Index } from "../features/home/index";

import type React from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Index />
    </Suspense>
  );
}
