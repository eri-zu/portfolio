import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import style from "./index.module.scss";
import GitSVG from "../../../../svg/github-mark-white.svg";
import { basePath } from "../../../../utils/basePath";
import { Tag } from "../tag";

import type { ClientWorks, Experiment } from "../../../types/works";
import type React from "react";
type Props = {
  data: Experiment | ClientWorks;
};

export const Card: React.FC<Props> = ({ data }) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  return (
    <div className={style.card}>
      <div className={style.inner}>
        <a
          className={style.imgLink}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            setIsEnter(true);
          }}
          onMouseLeave={() => {
            setIsEnter(false);
          }}
        >
          <Image
            src={
              data.type === "experiment"
                ? `${basePath}/images/experiment/${data.name}.webp`
                : `${basePath}/images/${data.name}.webp`
            }
            fill
            alt={data.title}
            className={classNames([style.img, isEnter && style["--on"]])}
          />
          <div
            className={classNames([style.imgCover, isEnter && style["--on"]])}
          ></div>
        </a>

        <div className={style.textArea}>
          <div className={style.titleArea}>
            <h2 className={style.title}>{data.title}</h2>
            {data.gitLink && (
              <div className={style.gitIcon}>
                <a
                  href={data.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitSVG role="img" arial-label="GitHubへのリンク"></GitSVG>
                </a>
              </div>
            )}
          </div>

          {data.tags && (
            <ul className={style.tagList}>
              {data.tags.map((el, i) => {
                return (
                  <li className={style.tagItem} key={`tag${i}`}>
                    <Tag>{el}</Tag>
                  </li>
                );
              })}
            </ul>
          )}

          {data.date && <p className={style.date}>{data.date}</p>}
        </div>
      </div>
    </div>
  );
};
