import Image from "next/image";

import GitSVG from "../../../../svg/github-mark-white.svg";
import { Tag } from "../tag";

import type { ExperimentType, ClientWorksType } from "../../../types/works";
import type React from "react";

type Props = {
  data: ExperimentType | ClientWorksType;
};

export const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full">
      <div>
        {/* 画像 */}
        <a
          className="block aspect-[6/3.5] relative w-full overflow-hidden border border-white/0 hover-card"
          href={data.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={data.image.url}
            fill
            alt={data.title}
            className="block w-full h-full object-cover"
          />
          <div className="hover-card-cover pointer-events-none bg-[var(--color-white)] absolute top-0 left-0 w-full h-full"></div>
        </a>

        {/* テキストエリア */}
        <div className="mt-[1rem] md:mt-[1.4rem]">
          <div className="flex justify-between gap-[1rem] items-start">
            {/* タイトル */}
            <h2 className="tracking-wider font-medium text-[1.6rem] md:text-[1.8rem] font-en2 leading-[1.3]">
              {data.title}
            </h2>

            {/* git */}
            {data.gitLink && (
              <div className="w-[1.8rem] md:w-[2rem] min-w-[1.8rem] md:min-w-[2rem] max-w-[1.8rem] md:max-w-[2rem] h-auto aspect-[98/96] flex-shrink-0">
                <a
                  href={data.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View project on GitHub"
                  className="block w-full h-full relative rounded-full hover-giticon"
                >
                  <GitSVG role="img" className="block w-full h-full"></GitSVG>
                </a>
              </div>
            )}
          </div>

          {/* タグリスト */}
          {data.type === "client" && "tags" in data && (
            <ul className="mt-[1.2rem] md:mt-[1.4rem] flex gap-[0.8rem] flex-wrap">
              {data.tags.map((el, i) => {
                return (
                  <li key={`tag${i}`}>
                    <Tag>{el}</Tag>
                  </li>
                );
              })}
            </ul>
          )}

          {/* 年 */}
          {data.type === "client" && "year" in data && (
            <p className="font-en2 text-[1.4rem] tracking-widest mt-[0.8rem] line-height-1">
              {data.year}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
