"use client";
import React, { type FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

interface SocialCarouselSwiperProps {
  posts: getAllPosts[];
}

const SocialCarouselSwiper: FC<SocialCarouselSwiperProps> = ({
  posts,
}): React.JSX.Element => {
  const socialCarousel = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(socialCarousel.current, {
        x: 100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: socialCarousel.current,
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
    <section ref={socialCarousel} className=" w-full h-auto ">
      <section className="w-full h-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          breakpoints={{
            648: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className=" mySwiper w-full h-auto px-1 cursor-grab"
        >
          {posts.map((post) => (
            <SwiperSlide
              key={post._id}
              className="relative w-full h-full aspect-[1/1] group"
            >
              <Image
                src={post.image}
                width={"1000"}
                height={"0"}
                alt={""}
                className="relative w-full h-full"
              />
              <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
                <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
                  <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
                    <div className="w-24 h-24 rounded-full p-6 border-4 border-white">
                      {post.socialMedia === "facebook" ? (
                        <BsFacebook className=" w-full h-full text-white" />
                      ) : post.socialMedia === "instagram" ? (
                        <BsInstagram className=" w-full h-full text-white" />
                      ) : post.socialMedia === "linkedIn" ? (
                        <BsLinkedin className=" w-full h-full text-white" />
                      ) : post.socialMedia === "x" ? (
                        <BsTwitterX className=" w-full h-full text-white" />
                      ) : post.socialMedia === "youtube" ? (
                        <BsYoutube className=" w-full h-full text-white" />
                      ) : post.socialMedia === "pinterest" ? (
                        <BsPinterest className=" w-full h-full text-white" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <p className="mt-3">Follow Us on {post.socialMedia}</p>
                    <Link
                      rel="stylesheet"
                      href=""
                      className="text-[26px] text-white leading-[30px] tracking-wide"
                    >
                      {post.socialId}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default SocialCarouselSwiper;
