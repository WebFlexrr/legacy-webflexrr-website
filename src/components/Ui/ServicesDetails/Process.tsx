"use client";
import Image from "next/image";
import React, { type FC } from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SwiperButtonComponent from "../SwiperButtonComponent";

interface ProcessProps {
  process: ServiceProcedure[];
}
const Process: FC<ProcessProps> = ({ process }) => {
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto pt-28 pb-20 px-5 md:px-5">
        <section className="w-full max-w-[100rem] mx-auto h-auto ">
          <section className="w-full h-fit flex flex-col">
            <Heading
              heading={"Procedure"}
              subHeading={"Our on Going process steps "}
            />
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              navigation={true}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1536: {
                  slidesPerView: 5,
                },
              }}
              className="relative w-full h-fit grid grid-cols-5 xl:mt-10"
            >
              {process?.map((steps) =>
                steps.step % 2 === 1 ? (
                  <SwiperSlide
                    key={steps._key}
                    className="relative w-full flex flex-col pl-0 process-padding-left-0"
                  >
                    <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                      <span className="relative w-full h-full bg-primary"></span>
                    </section>
                    <section>
                      <div className="w-full h-[340px]  pb-11">
                        <Image
                          src={steps.image}
                          width={"1000"}
                          height={"0"}
                          alt={""}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="relative w-full h-[1px] before:content-[''] before:absolute before:m-auto before:top-[50px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                      <div className="w-full h-[340px]  pt-11  ">
                        <div className="w-full h-full flex flex-col justify-between ">
                          <div className="w-full h-fit text-left">
                            <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                              {steps.step}
                            </span>
                          </div>
                          <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                            <span>{steps.title}</span>
                          </div>
                          <div className="w-full h-fit">
                            <p>{steps.description}</p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </SwiperSlide>
                ) : (
                  <SwiperSlide
                    key={steps._key}
                    className="relative w-full flex flex-col pr-20 process-padding-left-0 "
                  >
                    <section className="w-full h-[1px] absolute  bg-primary top-1/2 left-0">
                      <span className="relative w-full h-full bg-primary"></span>
                    </section>
                    <section className="flex flex-col-reverse ">
                      <div className="w-full h-[340px]  pt-11">
                        <Image
                          src={steps.image}
                          width={"1000"}
                          height={"0"}
                          alt={""}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="relative w-full h-[1px]  before:content-[''] before:absolute before:m-auto before:top-[-100px] before:left-[-30%] before:right-0 before:bottom-0  before:w-[1px] before:h-[100px] before:bg-primary before:translate-x-1/2  "></div>
                      <div className="w-full h-[340px]  pb-11  ">
                        <div className="w-full h-full flex flex-col justify-between ">
                          <div className="w-full h-fit text-[26px] leading-[30.16px] font-semibold text-secondary">
                            <span>{steps.title}</span>
                          </div>
                          <div className="w-full h-fit">
                            <p>{steps.description}</p>
                          </div>
                          <div className="w-full h-fit text-left">
                            <span className=" text-[60px] leading-[69px] font-semibold border-secondary text-transparent stroke-text hover:text-primary transition ease-in-out duration-500 ">
                              {steps.step}
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </SwiperSlide>
                ),
              )}

              <SwiperButtonComponent />
            </Swiper>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Process;
