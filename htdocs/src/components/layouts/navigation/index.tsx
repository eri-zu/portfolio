"use client";

import { useRouter } from "next/navigation";

import style from "./index.module.scss";
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
    <nav className={style.nav}>
      <ul className={style.list}>
        {data.map((el, i) => {
          return (
            <li className={style.item} key={`${i}`}>
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
