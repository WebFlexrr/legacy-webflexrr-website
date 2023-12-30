"use client";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { type FC, useRef } from "react";
import PulseCircle from "../PulseCircle";

interface GalleryContentSectionProps {
  projects: getAllProjects[];
}

const GalleryContentSection: FC<GalleryContentSectionProps> = ({
  projects,
}) => {
  const gallerySection2 = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".galleryContent", {
        y: 100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery",
          scroller: "main",
          start: "7% 80%",
        },
      });
      gsap.from(".galleryContent1", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".gallery",
          scroller: "main",
          start: "top 80%",
        },
        ease: "power2.out",
      });
      gsap.from(".galleryContent2", {
        x: 100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: ".gallery",
          scroller: "main",
          start: "top 80%",
        },
        ease: "power2.out",
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="galleryContent w-full h-auto">
      <section className="w-full h-full flex flex-col gap-5 ">
        <section className=" w-full xl:h-[30rem] h-fit flex flex-col sm:flex-row  sm:flex-wrap xl:flex-nowrap md:justify-evenly  gap-5">
          <div className="relative w-full h-[24rem]  xl:h-full   group md:w-[45%] xl:w-[25%] ">
            <Image
              src={"/assets/catalogue-mockup.jpg"}
              width={"2000"}
              height={"0"}
              alt=""
              className=" w-full h-full  xl:h-full  object-cover"
            />
            <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
              <Link
                href={"/projects"}
                className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
              >
                Catalogue Design
              </Link>
              <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                A Catalogue Design shows your product Inventory.
              </p>
              <section className="w-full flex justify-start">
                <Link
                  href={"/projects"}
                  className="flex gap-3 text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  <PulseCircle />
                  Read more
                </Link>
              </section>
            </div>
          </div>
          <div className=" relative w-full h-[24rem] xl:h-full group md:w-[50%] xl:w-[50%]">
            <Image
              src={"/assets/portfolio-website.jpg"}
              width={"2000"}
              height={"0"}
              alt=""
              className="w-full h-full xl:h-full  object-cover"
            />
            <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
              <Link
                href={"/projects"}
                className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
              >
                Portfolio Website
              </Link>
              <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                Your portfolio website presents our professional works in a
                better way.
              </p>
              <section className="w-full flex justify-start">
                <Link
                  href={"/projects"}
                  className="flex gap-3 text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  <PulseCircle />
                  Read more
                </Link>
              </section>
            </div>
          </div>
          <div className=" relative w-full h-[24rem] xl:h-full group md:w-1/2 xl:w-[25%]">
            <Image
              src={"/assets/business-card.png"}
              width={"2000"}
              height={"0"}
              alt=""
              className="w-full h-full  xl:h-full object-cover"
            />
            <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
              <Link
                href={"/projects"}
                className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
              >
                Business Card
              </Link>
              <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                It helps you to connects with clients in non Digital form.
              </p>
              <section className="w-full flex justify-start">
                <Link
                  href={"/projects"}
                  className="flex gap-3 text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  <PulseCircle />
                  Read more
                </Link>
              </section>
            </div>
          </div>
        </section>
        <section
          ref={gallerySection2}
          className=" relative w-full xl:h-[30rem] flex flex-col xl:flex-row gap-5 md:gap-5 xl:gap-0"
        >
          <div className=" galleryContent1 relative w-full xl:w-1/2 h-96 lg:h-full my-8 xl:my-0  flex justify-center items-center bg-background">
            <div className="w-full xl:max-w-lg h-auto px-6  flex flex-col gap-10">
              <h2 className="text-left text-[50px]  before:absolute before:content-[''] before:w-24 before:h-24 before:rounded-full before:bg-primary before:-z-20 -z-10">
                All Projects
              </h2>
              <span>
                <p className="text-left text-secondary">
                  Explore our portfolio, a testament to our mastery in web
                  design, development, SEO, digital marketing, and compelling
                  content creation. Each project showcases innovation and
                  results-driven solutions.
                </p>
              </span>
              <Link
                href={"/projects"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition ease-in-out duration-500"
              >
                <PulseCircle /> View All
              </Link>
            </div>
          </div>
          <section className="galleryContent2 w-full xl:w-1/2 flex flex-wrap md:flex-nowrap gap-5  ">
            <div className="relative group w-full  aspect-square xl:h-full md:w-1/2 ">
              <Image
                src={"/assets/logo.png"}
                width={"2000"}
                height={"0"}
                alt=""
                className="w-full  h-full  xl:h-full object-cover bg-white"
              />
              <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                <Link
                  href={"/projects"}
                  className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                >
                  Logo Design
                </Link>
                <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                  A logo makes your brands know to all like &quot;TATA with
                  their Iconic Logo&quot;.
                </p>
                <section className="w-full flex justify-start">
                  <Link
                    href={"/projects"}
                    className="flex gap-3 text-secondary hover:text-primary transition ease-in-out duration-500"
                  >
                    <PulseCircle />
                    Read more
                  </Link>
                </section>
              </div>
            </div>
            <div className="relative group w-full  aspect-square xl:h-full md:w-1/2 ">
              <Image
                src={"/assets/poster.jpg"}
                width={"2000"}
                height={"0"}
                alt=""
                className="w-full  h-full  xl:h-full object-container bg-white"
              />
              <div className="absolute -bottom-1 w-full h-auto p-10 flex flex-col justify-start gap-5 text-left  opacity-0  group-hover:opacity-100 translate-y-[1rem] group-hover:translate-y-0 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 transition-all ease-in-out duration-300">
                <Link
                  href={"/projects"}
                  className="text-secondary font-bold text-[30px] md:text-[36px] leading-[41.76px] translate-y-[1rem] group-hover:translate-y-0 hover:text-primary text-left transition ease-in-out duration-500"
                >
                  Poster Design
                </Link>
                <p className="translate-y-[1rem] text-secondary group-hover:translate-y-0 transition ease-in-out duration-700">
                  To put your offer to your client, I think you need a poster
                  after all.
                </p>
                <section className="w-full flex justify-start">
                  <Link
                    href={"/projects"}
                    className="flex gap-3 text-secondary hover:text-primary transition ease-in-out duration-500"
                  >
                    <PulseCircle />
                    Read more
                  </Link>
                </section>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default GalleryContentSection;
