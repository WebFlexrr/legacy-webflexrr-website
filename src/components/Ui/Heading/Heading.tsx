"use client";
import React, { type FC, useRef } from "react";
import PulseCircle from "../PulseCircle";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
interface HeadingProps {
  heading: string | null;
  subHeading: string;
}

const Heading: FC<HeadingProps> = ({ heading, subHeading }) => {
  const Heading = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(Heading.current, {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: Heading.current,
          scroller: "main",
          start: "top 80%",
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={Heading}
      className="w-full h-auto flex flex-col gap-3 items-center"
    >
      {heading != null ? (
        <>
          <span className="galleryHeading text-xl lg:text-2xl leading-7 text-subHeading flex gap-4">
            <PulseCircle />
            {heading}
            <PulseCircle flowDirection="right" />
          </span>
          <h2 className=" galleryHeading mb-10">{subHeading}</h2>
        </>
      ) : (
        <h2 className=" galleryHeading">{subHeading}</h2>
      )}
    </section>
  );
};

export default Heading;
