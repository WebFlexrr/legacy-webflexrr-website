"use client";
import Heading from "@/components/Ui/Heading/Heading";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { type FC, useRef } from "react";

interface CoreServicesProps {
  services: ServiceServices[] | null;
}

const CoreServices: FC<CoreServicesProps> = ({ services }) => {
  const CoreServices = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".core_servicesSection", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: CoreServices.current,
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
    <section
      ref={CoreServices}
      className="border-t border-black w-full h-auto bg-background2"
    >
      <section className="relative w-full h-fit">
        <section className="w-full h-auto flex py-20 xl:py-28 px-5 xl:px-0  flex-col items-center ">
          <Heading heading={"Services"} subHeading={"We are Mastery in "} />
          {/* <h1>We can offer</h1> */}
          <section className="w-full h-auto xl:mt-10 ">
            {/* <section className="w-full h-full flex flex-col md:flex-row md:flex-wrap  lg:gap-0  text-secondary border-tertiary "> */}
            <section className=" w-full h-full  grid grid-cols-1  xl:grid-cols-4 text-secondary border-tertiary ">
              {services?.map((items) => (
                <section
                  key={items._key}
                  className=" w-full h-auto core_servicesSection"
                >
                  <div className=" relative w-full h-[22rem] group xl:border-x border-secondary  ">
                    <div className=" relative w-full h-full flex flex-col gap-5 items-center md:p-8 xl:px-12 mx-auto ">
                      <span className=" xl:text-secondary text-primary font-bold text-[30px] md:text-[34px] leading-[41.76px] group-hover:text-primary text-center transition ease-in-out duration-500">
                        {items.title}
                      </span>
                      <span className="">
                        <p className="text-black text-lg text-center">
                          {items.description}
                        </p>
                      </span>
                    </div>
                    <Image
                      src={items.image}
                      width={"1080"}
                      height={"0"}
                      alt={""}
                      className=" absolute xl:absolute w-full xl:scale-75 opacity-30 -z-10 xl:opacity-0 xl:group-hover:visible xl:group-hover:scale-100 xl:group-hover:opacity-30 top-0 transition ease-in-out duration-300 "
                    />
                  </div>
                </section>
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default CoreServices;
