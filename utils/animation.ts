import gsap from "gsap";

import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const AnimationHide = (href: string, router: AppRouterInstance) => {
  const wrap = document.querySelector("main");

  if (wrap) {
    const tl = gsap.timeline();

    tl
      //
      .to(wrap, {
        opacity: 0,
        duration: 0.15,
        // ease: "power1.out",
        onComplete: () => {
          router.push(href);
        },
      });
  }
};

export const AnimationSetShow = () => {
  const wrap = document.querySelector("main");

  const tl = gsap.timeline();

  tl
    //
    .set(wrap, { opacity: 1 });
};
