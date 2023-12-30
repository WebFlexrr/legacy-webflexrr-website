"use client";
import Heading from "@/components/Ui/Heading/Heading";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { type FC, useRef } from "react";

interface TechnologiesProps {
  weAreUsing: ServiceWeAreUsing[];
}
const Technologies: FC<TechnologiesProps> = ({ weAreUsing }) => {
  const technologies = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".technologiesSection", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: technologies.current,
          scroller: "main",
          start: "30% 80%",
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={technologies} className="w-full h-auto bg-background ">
      <section className="w-full h-auto py-20 xl:py-28 px-5 ">
        <Heading heading={"Technology"} subHeading={"We are Using "} />
        <section className="w-full max-w-[70rem] h-fit mx-auto bg-background3 border-2 border-primary p-3 ">
          <section className="w-full h-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6  gap-5 ">
            {weAreUsing?.map((item) => (
              <div
                key={item._key}
                className="technologiesSection w-full h-[9rem] border-2 border-primary flex items-center justify-center"
              >
                <span className="flex flex-col items-center justify-center p-3.5 gap-3 text-secondary text-center font-semibold leading-[26px]">
                  <Image
                    src={item.iconImage}
                    width={50}
                    height={50}
                    alt={item.iconName}
                    className="text-[50px] text-blue-400"
                  />
                  {item.iconName}
                </span>
              </div>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Technologies;
