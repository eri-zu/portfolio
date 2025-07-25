"use client";

import { useRouter } from "next/navigation";

import { AnimationHide } from "../../../../utils/animation";
import { useGLStore } from "../../../stores/glStore";
import { Button } from "../../ui/button";

import type { Nav } from "../../../types/titleAreaType";
import type React from "react";

type Props = {
  data: Array<Nav>;
  subLayer?: boolean;
};

export const Navigation: React.FC<Props> = ({ data, subLayer }) => {
  const setBlobVisible = useGLStore((s) => s.setBlobVisible);
  const router = useRouter();

  const onClick = (href: string, blobVisible: boolean) => {
    setBlobVisible(blobVisible);
    AnimationHide(href, router);
  };

  return (
    <nav>
      <ul className="flex items-center justify-center gap-[2.4rem]">
        {data.map((el, i) => {
          return (
            <li key={`${i}`}>
              <Button
                href={el.href}
                subLayer={subLayer}
                onClick={() => {
                  onClick(el.href, el.blobVisible);
                }}
              >
                {el.label}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
