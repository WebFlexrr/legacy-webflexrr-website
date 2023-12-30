"use client";
import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TagLine = (): React.JSX.Element => {
  const tagLine = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tagLineContent", {
        x: -90,
        duration: 1.3,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tagLine.current,
          scroller: "main",
          start: "top 90%",
        },
      });
      gsap.from(".tagLineContent2", {
        x: 90,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tagLine.current,
          scroller: "main",
          start: "40% 90%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={tagLine} className=" relative w-full h-auto bg-background2 ">
      <section className="w-full py-20 lg:py-36 ">
        <section className="w-full max-w-[90rem] mx-auto px-5 md:px-10 flex flex-col gap-10 lg:gap-16 xl:gap-28 ">
          <section className="tagLineContent w-full max-w-5xl mx-auto text-center flex flex-col gap-14">
            <h3>
              It&apos;s Time To Take Your Digital Marketing To The Next Level We
              Are Always Here To Help You Grow Your Business
            </h3>
          </section>
          <section className="tagLineContent2  lg:min-w-[40rem] lg:mx-auto xl:w-full  h-auto lg:justify-evenly items-center justify-between  text-tertiary">
            <section className="w-fit md:w-full h-auto grid md:grid-cols-2 lg:gap-7 xl:grid-cols-4 mx-auto">
              <div className="w-60 lg:w-80 h-32 flex items-center gap-5   ">
                <div className="text-[75px] lg:text-[100px] xl:text-[120px] leading-[87px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                  2+
                </div>
                <div className="w-fit flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                  Years Experience
                </div>
              </div>
              <div className="w-60 lg:w-80 h-32  flex items-center gap-5 ">
                <div className="text-[75px] lg:text-[100px] xl:text-[120px]  leading-[87px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                  12+
                </div>
                <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                  Advanced Tools
                </span>
              </div>
              <div className="w-60 lg:w-80 h-32  flex items-center gap-5 ">
                <div className="text-[75px] lg:text-[100px] xl:text-[120px]  leading-[87px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-700">
                  10+
                </div>
                <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-700">
                  Clients Satisfied
                </span>
              </div>
              <div className="w-60 lg:w-80 h-32 flex items-center gap-5 ">
                <div className="text-[75px] lg:text-[100px] xl:text-[120px]  leading-[87px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500">
                  20+
                </div>
                <span className="flex flex-col text-2xl text-left leading-10 text-tertiary hover:text-secondary transition ease-in-out duration-500">
                  Projects Completed
                </span>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default TagLine;
