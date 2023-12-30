"use client";
import React, { type FC } from "react";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import ServiceSectionItem from "./ServiceSectionItem";

interface ServiceSectionProps {
  data: getAllServices[];
}

const ServiceSection: FC<ServiceSectionProps> = ({ data }) => {
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".servicesSections", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.inout",
        scrollTrigger: {
          trigger: ".services",
          scroller: "main",
          start: "13% 80%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className=" w-full h-auto  xl:mt-10 flex justify-center ">
      <section className=" w-fit h-full flex flex-col md:flex-row md:flex-wrap justify-center gap-2  lg:gap-4  text-secondary border-tertiary ">
        {data.map((item) => (
          <ServiceSectionItem
            key={item._id}
            name={item.name}
            slug={item.slug}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </section>
  );
};

export default ServiceSection;
