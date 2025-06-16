import { randomBytes } from "crypto";

import classNames from "classnames";
import {
  Big_Shoulders_Text,
  Noto_Sans_JP,
  Source_Sans_3,
} from "next/font/google";

import style from "./layout.module.scss";
import { Footer } from "../components/layouts/footer";
import { Gl } from "../components/layouts/gl";

import type { Metadata } from "next";
import type React from "react";

import "../styles/globals.scss";

const nonce = randomBytes(128).toString("base64");
const csp = `
  default-src 'self';
	script-src 'self' 'nonce-${nonce}' https: http:;
	style-src 'self' 'unsafe-inline' https:;
  img-src 'self' data: https:;
  font-src 'self' https:;
	object-src 'none';
	base-uri 'self';
	frame-ancestors 'none';
	upgrade-insecure-requests;
  connect-src 'self' https:;
`;

export const metadata: Metadata = {
  title: {
    default: "ERI IZUTSU Portfolio",
    template: "%s | ERI IZUTSU Portfolio",
  },
  description: "A creative portfolio by ERI IZUTSU",
  openGraph: {
    title: "ERI IZUTSU Portfolio",
    description: "A creative portfolio by ERI IZUTSU",
    url: "https://eri-zu.vercel.app/",
    siteName: "ERI IZUTSU Portfolio",
    images: [
      {
        url: "https://eri-zu.vercel.app/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "portfolio",
    description: "A creative portfolio by ERI IZUTSU",
    images: ["https://eri-zu.vercel.app/ogp.png"],
  },
  other: {
    "Strict-Transport-Security": `max-age=63072000; includeSubDomains; preload`,
    "X-Frame-Options": `SAMEORIGIN`,
    "Referrer-Policy": `strict-origin-when-cross-origin`,
    "Content-Security-Policy": `${csp.replace(/\n/g, "")}`,
  },
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-en",
});

const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  variable: "--font-en2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={classNames([
        notoSansJP.variable,
        sourceSans3.variable,
        bigShoulders.variable,
      ])}
    >
      <body>
        <div className={style.wrapper}>
          <div className={style.inner}>
            <Gl></Gl>
            <main className={style.main}>
              <div className={style.mainInner}>{children}</div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
