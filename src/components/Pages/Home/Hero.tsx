"use client";
import React, { useRef } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import { BiPlay } from "react-icons/bi";
import Image from "next/image";
import PulseCircle from "../../Ui/PulseCircle";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import Link from "next/link";

const Hero = (): React.JSX.Element => {
  const hero = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero1", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "circ.inOut",
      });
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={hero} id={"home"} className=" w-full h-auto  pt-16 lg:pt-28 ">
      <section className=" w-full max-w-[110rem] h-full  px-3 sm:px-5 md:px-14 xl:px-20 mx-auto">
        <section className="relative  w-full h-fit flex flex-col-reverse lg:flex-row py-10 xl:py-28">
          {/* left */}
          <section className=" w-full lg:w-[50%] h-full  flex items-end z-10 ">
            <section className=" w-full lg:w-[40rem] h-fit mt-10 lg:mt-0 flex gap-5 sm:gap-8 lg:gap-16 ">
              <section
                id="social"
                className=" w-10 h-auto flex flex-col items-center gap-20 "
              >
                <section className=" animate-visible-from-up ">
                  <ul className="flex flex-col gap-12 text-paragraph">
                    <li>
                      <Link
                        href={
                          "https://www.facebook.com/profile.php?id=61553639945217"
                        }
                        target="_blank"
                        aria-label="This is Facebook"
                      >
                        <SlSocialFacebook className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://www.instagram.com/webflexrr"}
                        target="_blank"
                        aria-label="This is Instagram"
                      >
                        <SlSocialInstagram className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://twitter.com/WebFlexRR"}
                        target="_blank"
                        aria-label="This is Twitter"
                      >
                        <RiTwitterXLine className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"https://www.linkedin.com/company/webflexrr"}
                        target="_blank"
                        aria-label="This is Linkedin"
                      >
                        <FaLinkedinIn className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]  hover:text-primary transition ease-in-out duration-500" />
                      </Link>
                    </li>
                  </ul>
                </section>
                <section className="animate-visible-from-down w-full h-auto flex flex-col gap-6 items-center ">
                  <PulseCircle flowDirection="bottom" />
                  <div className="w-full h-fit mt-10 ">
                    <p className=" rotate-[270deg] text-secondary text-base tracking-[4px] uppercase">
                      scroll
                    </p>
                  </div>
                </section>
              </section>
              <section className="  w-full h-auto flex flex-col gap-2 lg:gap-8 text-white">
                <div className="hero1 w-full h-fit flex flex-wrap gap-6 items-center    ">
                  <PulseCircle />
                  <span className="text-[20px] sm:text-[26px] leading-[42.64px] font-medium text-secondary">
                    WebFlexrr Digital Services
                  </span>
                </div>
                <h1 className="hero1 lg:w-[35rem]">
                  We Solve Your Problem With Our
                  <span className="text-primary"> Best Experts Lead</span>
                </h1>
                <p className="hero1 lg:w-[40rem] mt-4 ">
                  Welcome to WebFlexrr, Transforming visions into captivating
                  online experiences, our team specializes in cutting-edge web
                  design, seamless web development, powerful digital marketing
                  strategies, SEO optimization, and compelling content creation.
                  Elevate your online presence with our tailored solutions.
                </p>
                <section className=" hero1 w-full flex mt-9">
                  <div className="flex items-center gap-6 text-lg">
                    <div className="relative">
                      <div className="w-14 h-14 flex items-center justify-center  rounded-full  bg-primary">
                        <BiPlay className="w-8 h-8 " />
                      </div>
                      <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 animate-ping w-14 h-14 flex items-center justify-center  rounded-full  bg-primary">
                        <BiPlay className="w-8 h-8 " />
                      </div>
                    </div>
                    <span className="text-secondary">view video</span>
                  </div>
                </section>
              </section>
            </section>
          </section>
          {/* right */}
          <section className=" flex relative w-full lg:w-[50%] h-full flex-col justify-center items-center">
            <Image
              src={"/assets/home.png"}
              width={"400"}
              height={"400"}
              alt=""
              priority={true}
              placeholder={"empty"}
              className=" animate-visible-from-left w-full  lg:mt-32 xl:mt-20 2xl:mt-0 drop-shadow-xl-black"
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
