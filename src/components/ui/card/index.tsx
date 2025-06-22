import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import style from "./index.module.scss";
import GitSVG from "../../../../svg/github-mark-white.svg";
import { Tag } from "../tag";

import type { ExperimentType, ClientWorksType } from "../../../types/works";
import type React from "react";
type Props = {
  data: ExperimentType | ClientWorksType;
};

export const Card: React.FC<Props> = ({ data }) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);

  return (
    <div className={style.card}>
      <div className={style.inner}>
        <a
          className={classNames([style.imgLink, isEnter && style["--on"]])}
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
            src={data.image.url}
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
                  arial-label="GitHubへのリンク"
                >
                  <GitSVG role="img"></GitSVG>
                </a>
              </div>
            )}
          </div>

          {data.type === "client" && "tags" in data && (
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

          {data.type === "client" && "year" in data && (
            <p className={style.date}>{data.year}</p>
          )}
        </div>
      </div>
    </div>
  );
};
