import { randomBytes } from "crypto";

import classNames from "classnames";
import { Big_Shoulders_Text, Source_Sans_3 } from "next/font/google";

import style from "./layout.module.scss";
import { Footer } from "../components/layouts/footer";
import { Gl } from "../components/layouts/gl";
import { AnimationControlButton } from "../components/ui/animationControlButton";

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

const description =
  "A portfolio by ERI IZUTSU, showcasing selected works and personal projects.";
const title = "ERI IZUTSU Portfolio";
const url = "https://eri-zu.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | ERI IZUTSU Portfolio",
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: `${url}ogp.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${url}ogp.png`],
  },
  other: {
    "Strict-Transport-Security": `max-age=63072000; includeSubDomains; preload`,
    "X-Frame-Options": `SAMEORIGIN`,
    "Referrer-Policy": `strict-origin-when-cross-origin`,
    "Content-Security-Policy": `${csp.replace(/\n/g, "")}`,
  },
};

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
      className={classNames([sourceSans3.variable, bigShoulders.variable])}
    >
      <body>
        <div className={style.wrapper}>
          <div className={style.inner}>
            <Gl></Gl>
            <AnimationControlButton></AnimationControlButton>
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
