import { Source_Sans_3, Big_Shoulders_Text } from "next/font/google";

export const sourceSans3 = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

export const bigShoulders = Big_Shoulders_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-en2",
  display: "swap",
});
