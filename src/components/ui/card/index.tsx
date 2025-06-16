import Image from "next/image";

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
  return (
    <div className={style.card}>
      <div className={style.inner}>
        <a
          className={style.imgLink}
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={
              data.type === "experiment"
                ? `${basePath}/images/experiment/${data.name}.webp`
                : `${basePath}/images/${data.name}.webp`
            }
            fill
            loading="eager"
            alt={data.title}
          />
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
