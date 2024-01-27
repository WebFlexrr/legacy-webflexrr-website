"use client";
import Heading from "@/components/Ui/Heading/Heading";
import React, { type FC, useState } from "react";

interface HeroProps {
  plans: getAllPlans[];
}
const Hero: FC<HeroProps> = ({ plans }): React.JSX.Element => {
  const [plan, setPlan] = useState<getAllPlans>(plans[0]);

  return (
    <>
      <section className="w-full h-auto ">
        <section className="w-full h-auto py-20 px-5 xl:py-28">
          <section className=" w-full max-w-[100rem] mx-auto h-auto flex flex-col ">
            {/* Heading */}
            <Heading
              heading={"Budget Friendly"}
              subHeading={"Choose Your Best Plan"}
            />

            <section className=" w-full h-auto mb-16 flex  gap-6  ">
              {/* Selection Pannel */}
              <section className=" w-fit mx-auto hidden md:flex flex-col gap-6 items-center">
                <section className=" w-fit h-auto">
                  <ul className="w-fit h-auto flex">
                    {plans.map((item) => (
                      <li key={item.id}>
                        <button
                          className={`w-[11rem] h-[4rem] border-2 border-secondary ${
                            item.name === "All-in-One" ? "bg-primary" : " "
                          }  text-secondary text-base hover:bg-primary flex items-center justify-center transition ease-in-out duration-500`}
                          onClick={() => {
                            setPlan(item);
                          }}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
                {/* <section className="  w-fit h-auto flex ">
                  <button
                    className={`
                   w-[11rem] h-[4rem] border-2 border-secondary  ${
                     time === "Monthly" ? "bg-primary" : " "
                   } text-secondary text-base flex items-center justify-center transition ease-in-out duration-500
                  `}
                    onClick={() => setTime("Monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`
                   w-[11rem] h-[4rem] border-y-2 border-r-2 border-secondary ${
                     time === "Annual" ? "bg-primary" : " "
                   } text-secondary text-base  flex items-center justify-center transition ease-in-out duration-500
                  `}
                    onClick={() => setTime("Annual")}
                  >
                    Annual
                  </button>
                </section> */}
              </section>

              {/* Options Pannel */}
              <section className="w-full h-auto  flex md:hidden flex-col gap-6">
                <section className="w-full h-auto  flex justify-center">
                  <select
                    className=" border border-black w-full max-w-[30rem] h-[3.5rem] bg-primary text-secondary text-base leading-[16px]  text-center  "
                    onChange={(e) => {
                      e.preventDefault();
                      setPlan(plans[parseInt(e.target.value)]);
                    }}
                    title="Package"
                    name="Package"
                  >
                    {plans.map((item, index) => (
                      <option
                        key={item.id}
                        value={index}
                        className=" w-[11rem] h-[4rem] border-2 border-secondary bg-background3 text-secondary text-base flex items-center justify-center"
                      >
                        {item.name}
                      </option>
                    ))}
                    {/* <option className=" w-[11rem] h-[4rem] border-2 border-secondary bg-background3 text-secondary text-base flex items-center justify-center">
                      All-in-One
                    </option>
                    <option className=" w-[11rem] h-[4rem] border-y-2 border-r-2 border-secondary bg-background3 text-secondary text-base  flex items-center justify-center">
                      Web/App Dev
                    </option>
                    <option className=" w-[11rem] h-[4rem] border-y-2 border-r-2 border-secondary text-secondary bg-background3 text-base  flex items-center justify-center">
                      Content
                    </option>
                    <option className=" w-[11rem] h-[4rem] border-y-2 border-r-2 border-secondary text-secondary bg-background3 text-base  flex items-center justify-center">
                      Business
                    </option> */}
                  </select>
                </section>
                {/* <section className="w-full h-auto flex justify-center">
                  <select
                    className="border border-black w-full max-w-[30rem] bg-primary text-secondary text-base leading-[16px] h-[3.5rem] text-center "
                    title="Monthly Subscription"
                    name=""
                    id=""
                  >
                    <option className=" w-[11rem] h-[4rem] border-2 border-secondary bg-primary text-secondary text-base flex items-center justify-center">
                      Monthly
                    </option>
                    <option className=" w-[11rem] h-[4rem] border-y-2 border-r-2 border-secondary text-secondary text-base  flex items-center justify-center">
                      Annual
                    </option>
                  </select>
                </section> */}
              </section>
            </section>

            {/* Plan Cards */}
            <section className=" w-full h-auto sm:px-10 md:px-0">
              <section className=" w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 2xl:gap-20">
                {plan.plans.map((item) => (
                  <section
                    key={item._key}
                    className="w-full h-auto border-2  border-secondary rounded-md bg-background3 flex flex-col justify-between"
                  >
                    {/* heading */}
                    <section className=" w-full h-auto pt-[4.5rem] pb-[3rem] flex flex-col gap-10 justify-center items-center border-b-2 border-black">
                      <span className="text-secondary text-[40px] leading-[34.8px] font-semibold ">
                        {item.name}
                      </span>

                      <div className="flex gap-2">
                        <span className="text-secondary text-[50px] leading-[40px] font-semibold">
                          {item.months}
                        </span>
                        <span className="text-secondary text-[30px] leading-[26.24px]">
                          month
                        </span>
                      </div>
                    </section>
                    {/* mid Section */}
                    <section className=" w-full h-full py-4  text-secondary flex flex-col justify-start items-center ">
                      <ul className=" w-full h-auto px-12 list-disc flex flex-col gap-4 items-center text-base leading-[28.8px] text-start">
                        {item.service.map((service, index) => (
                          <li className="w-full" key={index}>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </section>
                    {/* button */}
                    <section className="border-t-2 border-black w-full h-fit py-[4rem]">
                      <button
                        type="submit"
                        className="w-fit h-fit  py-4 px-7 mx-auto flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
                        Choose Plan
                      </button>
                    </section>
                  </section>
                ))}

                {/* <section className="relative border-2  border-secondary rounded-md bg-primary w-full h-auto flex flex-col ">
                  <span className="absolute top-3 right-0  py-2 px-4 rounded-l-full bg-background3 -rotate-90">
                    New
                  </span>

                  {/* heading */}
                {/* <section className=" w-full h-auto pt-[4.5rem] pb-[3rem] flex flex-col gap-10 justify-center items-center"> */}
                {/* <span className="text-secondary text-[30px] leading-[34.8px] font-semibold ">
                      Super Nova
                    </span>
                    <div className="w-fit h-fit rounded-full p-7 bg-background border-2 border-secondary  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64.2"
                        height="64.2"
                        viewBox="0 0 50.1 63"
                        className="fill-primary "
                      >
                        <g transform="translate(-1007.5 -7477.5)">
                          {" "}
                          <g transform="translate(1009 7479)">
                            {" "}
                            <g>
                              {" "}
                              <path d="M43.5,49.1h-7.3c-2.8,0-5.1-2.3-5.1-5.1s2.3-5.1,5.1-5.1h7.3c1,0,1.8,0.8,1.8,1.8v6.8C45.3,48.3,44.5,49.1,43.5,49.1z     M36.2,40.2c-2.1,0-3.8,1.7-3.8,3.8c0,2.1,1.7,3.8,3.8,3.8h7.3c0.2,0,0.4-0.2,0.4-0.4v-6.8c0-0.2-0.2-0.4-0.4-0.4l0-0.7v0.7H36.2    z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M36.5,46.4c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4C39,45.3,37.9,46.4,36.5,46.4z     M36.5,42.9c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1C37.6,43.4,37.1,42.9,36.5,42.9z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M39.7,57.5H6.2c-2.4,0-4.4-2-4.4-4.4V27.8c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v25.3c0,1.7,1.4,3,3,3h33.5    c1.7,0,3-1.4,3-3v-4.7c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v4.7C44,55.5,42.1,57.5,39.7,57.5z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M43.4,40.2c-0.4,0-0.7-0.3-0.7-0.7v-4.7c0-1.7-1.4-3-3-3H5.8c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4H20c0.4,0,0.7,0.3,0.7,0.7    s-0.3,0.7-0.7,0.7H5.8c-1.5,0-2.7,1.2-2.7,2.7c0,1.5,1.2,2.7,2.7,2.7h33.8c2.4,0,4.4,2,4.4,4.4v4.7C44,39.9,43.7,40.2,43.4,40.2z    "></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M41.3,32.2c-0.4,0-0.7-0.3-0.7-0.7v-3.2c0-1.5-1-2.8-2.5-3.2c-0.4-0.1-0.6-0.4-0.5-0.8c0.1-0.4,0.4-0.6,0.8-0.5    c2.1,0.5,3.5,2.3,3.5,4.5v3.2C42,31.9,41.7,32.2,41.3,32.2z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M37.9,28.5H16.3c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h21.6c0.4,0,0.7,0.3,0.7,0.7S38.3,28.5,37.9,28.5z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M10.3,28.5H5.8c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h4.6c0.4,0,0.7,0.3,0.7,0.7S10.7,28.5,10.3,28.5z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M32.3,28.5c-0.2,0-0.4-0.1-0.6-0.3c-0.2-0.3-0.1-0.7,0.2-0.9c2.4-1.5,3.1-4.7,1.6-7c-1.5-2.4-4.7-3.1-7-1.6    c-1.2,0.7-2,1.9-2.3,3.2c-0.3,1.3-0.1,2.7,0.6,3.9c0.4,0.7,1,1.2,1.6,1.6c0.3,0.2,0.4,0.6,0.2,0.9c-0.2,0.3-0.6,0.4-0.9,0.2    c-0.8-0.5-1.5-1.2-2.1-2.1c-0.9-1.5-1.2-3.2-0.8-4.9c0.4-1.7,1.4-3.1,2.9-4c3-1.9,7-1,8.9,2.1s1,7-2.1,8.9    C32.5,28.4,32.4,28.5,32.3,28.5z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M13.7,20.3C13.7,20.3,13.7,20.3,13.7,20.3c-3,0-5.5-2.4-5.5-5.5s2.4-5.5,5.5-5.5c1.5,0,2.8,0.6,3.9,1.6    c1,1,1.6,2.4,1.6,3.9C19.2,17.8,16.7,20.3,13.7,20.3z M13.7,10.7c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1,4.1,4.1h0    c2.3,0,4.1-1.8,4.1-4.1C17.8,12.5,16,10.7,13.7,10.7z"></path>{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path d="M27.3,12c-2.6,0-4.8-2.1-4.8-4.8s2.1-4.8,4.8-4.8S32,4.6,32,7.3S29.9,12,27.3,12z M27.3,3.8c-1.9,0-3.4,1.5-3.4,3.4    s1.5,3.4,3.4,3.4c1.9,0,3.4-1.5,3.4-3.4S29.2,3.8,27.3,3.8z"></path>{" "}
                            </g>{" "}
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="">
                      <span className="text-secondary text-[60px] leading-[60px] font-semibold">
                        $1000
                      </span>
                      <span className="text-secondary leading-[26.24px]">
                        / month
                      </span>
                    </div>
                  </section> */}
                {/* mid Section */}
                {/* <section className=" w-full h-auto text-secondary flex flex-col justify-center items-center">
                    <ul className=" w-full h-auto list-disc flex flex-col gap-4 items-center text-base leading-[28.8px] text-center">
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                    </ul>
                  </section>
                  {/* button */}
                {/* <section className=" w-full py-[4rem]"> 
                    <button
                      type="submit"
                      className="w-fit h-fit  py-4 px-7 mx-auto flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
                      Choose Plan
                    </button>
                  </section>
                </section> */}
                {/* <section className="border-2  border-secondary rounded-md w-full h-auto flex flex-col "> */}
                {/* heading */}
                {/* <section className=" w-full h-auto pt-[4.5rem] pb-[3rem] flex flex-col gap-10 justify-center items-center">
                    <span className="text-secondary text-[30px] leading-[34.8px] font-semibold ">
                      Starter Pro
                    </span>
                    <div className="w-fit h-fit rounded-full p-7 border-2 border-secondary  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64.2"
                        height="64.2"
                        viewBox="0 0 64.2 64.2"
                        className="fill-primary "
                        // style="enable-background:new 0 0 64.2 64.2;"
                        // xml:space="preserve"
                      >
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M32.1,51.4C18.4,51.4,7.3,45,7.3,37.3V27c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v10.3c0,7,10.5,12.7,23.5,12.7     s23.5-5.7,23.5-12.7V27c0-0.4,0.3-0.7,0.7-0.7S57,26.6,57,27v10.3C57,45,45.8,51.4,32.1,51.4z"></path>{" "}
                                <path d="M32.1,51.5c-13.8,0-25-6.4-25-14.2V27c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v10.3c0,6.9,10.5,12.6,23.3,12.6     s23.3-5.7,23.3-12.6V27c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8v10.3C57.1,45.1,45.9,51.5,32.1,51.5z M8,26.4     c-0.3,0-0.6,0.3-0.6,0.6v10.3c0,7.7,11.1,14,24.7,14s24.7-6.3,24.7-14V27c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6v10.3     c0,7.1-10.6,12.8-23.6,12.8S8.5,44.3,8.5,37.3V27C8.5,26.7,8.3,26.4,8,26.4z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M32.1,41.1C18.4,41.1,7.3,34.8,7.3,27s11.2-14.1,24.9-14.1S57,19.2,57,27S45.8,41.1,32.1,41.1z M32.1,14.3     C19.2,14.3,8.7,20,8.7,27s10.5,12.7,23.5,12.7S55.6,34,55.6,27S45.1,14.3,32.1,14.3z"></path>{" "}
                                <path d="M32.1,41.2c-13.8,0-25-6.4-25-14.2c0-7.9,11.2-14.2,25-14.2s25,6.4,25,14.2C57.1,34.8,45.9,41.2,32.1,41.2z M32.1,13     C18.5,13,7.4,19.3,7.4,27c0,7.7,11.1,14,24.7,14s24.7-6.3,24.7-14C56.9,19.3,45.8,13,32.1,13z M32.1,39.8     c-13,0-23.6-5.8-23.6-12.8c0-7.1,10.6-12.8,23.6-12.8S55.7,19.9,55.7,27C55.7,34.1,45.1,39.8,32.1,39.8z M32.1,14.4     C19.3,14.4,8.8,20,8.8,27c0,6.9,10.5,12.6,23.3,12.6S55.5,33.9,55.5,27C55.5,20,45,14.4,32.1,14.4z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M33.2,34c-1.5,0-3-0.3-4.5-0.8c-0.4-0.1-0.5-0.5-0.4-0.9c0.1-0.4,0.5-0.5,0.9-0.4c2.2,0.9,4.6,1,6.9,0.4     c2.5-0.6,3.7-1.7,4-2.4c0.1-0.3,0.1-0.6-0.2-0.9c-1.3-1.8-4.1-1.7-7.9-1.1c-4.8,0.8-7.8,0.3-9.3-1.6c-0.5-0.7-0.6-1.5-0.4-2.3     c0.5-1.4,2.4-2.7,5-3.3c2.5-0.7,5.1-0.6,7.6,0.3c0.4,0.1,0.6,0.5,0.4,0.9c-0.1,0.4-0.5,0.6-0.9,0.4c-2.2-0.8-4.5-0.9-6.8-0.3     c-2.5,0.6-3.7,1.7-4,2.4c-0.1,0.3-0.1,0.6,0.2,0.9c1.1,1.4,3.7,1.8,7.9,1.1c3.5-0.6,7.3-1,9.3,1.6c0.5,0.7,0.6,1.5,0.4,2.3     c-0.5,1.4-2.4,2.7-5,3.3C35.4,33.9,34.3,34,33.2,34z"></path>{" "}
                                <path d="M33.2,34.1c-1.5,0-3.1-0.3-4.5-0.8c-0.4-0.2-0.6-0.6-0.5-1.1c0.1-0.2,0.2-0.4,0.4-0.5c0.2-0.1,0.4-0.1,0.6,0     c2.2,0.8,4.6,1,6.8,0.3c2.5-0.6,3.6-1.6,3.9-2.4c0.1-0.3,0.1-0.6-0.1-0.8c-1.3-1.7-4.1-1.6-7.8-1c-4.9,0.8-7.9,0.3-9.4-1.7     c-0.5-0.7-0.7-1.6-0.4-2.4c0.5-1.5,2.4-2.7,5-3.4c2.5-0.7,5.2-0.6,7.7,0.3c0.2,0.1,0.4,0.2,0.5,0.4c0.1,0.2,0.1,0.4,0,0.6     c-0.2,0.4-0.6,0.6-1.1,0.5c-2.2-0.8-4.5-0.9-6.7-0.3c-2.5,0.6-3.6,1.6-3.9,2.4c-0.1,0.3-0.1,0.6,0.1,0.8c1,1.4,3.7,1.7,7.8,1     c3.5-0.6,7.4-1,9.4,1.7c0.5,0.7,0.7,1.6,0.4,2.4c-0.5,1.5-2.4,2.7-5,3.4C35.4,34,34.3,34.1,33.2,34.1z M29,31.9     c-0.1,0-0.2,0-0.2,0.1c-0.1,0.1-0.3,0.2-0.3,0.3c-0.1,0.3,0,0.6,0.3,0.8c2.5,0.9,5.2,1.1,7.7,0.4c2.6-0.6,4.4-1.8,4.9-3.2     c0.3-0.7,0.1-1.5-0.4-2.2c-1.9-2.5-5.7-2.1-9.2-1.6c-4.2,0.7-6.9,0.3-8-1.1c-0.3-0.3-0.3-0.7-0.2-1.1c0.3-0.8,1.5-1.9,4.1-2.5     c2.3-0.6,4.6-0.5,6.8,0.3c0.3,0.1,0.6,0,0.8-0.4c0.1-0.1,0-0.3,0-0.4c-0.1-0.1-0.2-0.2-0.3-0.3c-2.4-0.9-5-1-7.5-0.3     c-2.6,0.6-4.4,1.8-4.9,3.2c-0.3,0.7-0.1,1.5,0.4,2.2c1.4,1.8,4.4,2.4,9.2,1.6c3.8-0.6,6.7-0.7,8,1.1c0.3,0.3,0.3,0.7,0.2,1     c-0.3,0.8-1.5,1.9-4.1,2.5c-2.3,0.6-4.7,0.5-7-0.4C29.1,31.9,29.1,31.9,29,31.9z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M37.6,35.3c-0.2,0-0.4-0.1-0.6-0.3L25.7,20c-0.2-0.3-0.2-0.8,0.1-1c0.3-0.2,0.8-0.2,1,0.1l11.4,15     c0.2,0.3,0.2,0.8-0.1,1C37.9,35.2,37.8,35.3,37.6,35.3z"></path>{" "}
                                <path d="M37.6,35.4c-0.3,0-0.5-0.1-0.7-0.3l-11.4-15c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.4,0.3-0.5c0.2-0.1,0.4-0.2,0.6-0.2     c0.2,0,0.4,0.1,0.5,0.3l11.4,15c0.3,0.4,0.2,0.9-0.2,1.2C38,35.3,37.8,35.4,37.6,35.4z M26.2,19c-0.1,0-0.3,0-0.4,0.1     c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.2,0,0.3,0.1,0.4l11.4,15c0.2,0.2,0.6,0.3,0.8,0.1c0.3-0.2,0.3-0.6,0.1-0.8l-11.4-15     C26.6,19.1,26.4,19,26.2,19C26.3,19,26.2,19,26.2,19z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M60.3,61c-0.2,0-0.4-0.1-0.5-0.2l-8.7-8.7c-0.3-0.3-0.3-0.7,0-1c0.3-0.3,0.7-0.3,1,0l8.7,8.7c0.3,0.3,0.3,0.7,0,1     C60.7,60.9,60.5,61,60.3,61z"></path>{" "}
                                <path d="M60.3,61.1c-0.2,0-0.4-0.1-0.6-0.2L51,52.2c-0.3-0.3-0.3-0.8,0-1.2c0.3-0.3,0.8-0.3,1.2,0l8.7,8.7     c0.2,0.2,0.2,0.4,0.2,0.6s-0.1,0.4-0.2,0.6C60.7,61,60.5,61.1,60.3,61.1z M51.6,51c-0.2,0-0.3,0.1-0.4,0.2     c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.2,0.1,0.3,0.2,0.4l8.7,8.7c0.2,0.2,0.6,0.2,0.8,0c0.2-0.2,0.2-0.6,0-0.8L52,51.2     C51.9,51.1,51.8,51,51.6,51z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M12.7,13.4c-0.2,0-0.4-0.1-0.5-0.2L3.4,4.4c-0.3-0.3-0.3-0.7,0-1s0.7-0.3,1,0l8.8,8.8c0.3,0.3,0.3,0.7,0,1     C13.1,13.4,12.9,13.4,12.7,13.4z"></path>{" "}
                                <path d="M12.7,13.6c-0.2,0-0.4-0.1-0.6-0.2L3.4,4.5C3.2,4.4,3.1,4.2,3.1,3.9s0.1-0.4,0.2-0.6C3.7,3,4.2,3,4.5,3.4l8.8,8.8     c0.3,0.3,0.3,0.8,0,1.2C13.2,13.5,13,13.6,12.7,13.6z M3.9,3.3c-0.2,0-0.3,0.1-0.4,0.2c-0.2,0.2-0.2,0.6,0,0.8l8.8,8.8     c0.2,0.2,0.6,0.2,0.8,0c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.2-0.4L4.4,3.5C4.2,3.4,4.1,3.3,3.9,3.3z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M15,47.4c-0.4,0-0.7-0.3-0.7-0.7V36.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7v10.3C15.7,47.1,15.4,47.4,15,47.4z"></path>{" "}
                                <path d="M15,47.5c-0.5,0-0.8-0.4-0.8-0.8V36.4c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8v10.3C15.8,47.2,15.4,47.5,15,47.5z      M15,35.8c-0.3,0-0.6,0.3-0.6,0.6v10.3c0,0.3,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V36.4C15.5,36.1,15.3,35.8,15,35.8z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M25.6,50.9c-0.4,0-0.7-0.3-0.7-0.7V39.9c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v10.3C26.3,50.6,26,50.9,25.6,50.9z"></path>{" "}
                                <path d="M25.6,51c-0.5,0-0.8-0.4-0.8-0.8V39.9c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v10.3C26.5,50.6,26.1,51,25.6,51z      M25.6,39.3c-0.3,0-0.6,0.3-0.6,0.6v10.3c0,0.3,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V39.9C26.2,39.6,26,39.3,25.6,39.3z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M39.6,50.7c-0.4,0-0.7-0.3-0.7-0.7V39.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7V50C40.3,50.4,40,50.7,39.6,50.7z"></path>{" "}
                                <path d="M39.6,50.8c-0.5,0-0.8-0.4-0.8-0.8V39.7c0-0.5,0.4-0.8,0.8-0.8c0.5,0,0.8,0.4,0.8,0.8V50C40.4,50.5,40.1,50.8,39.6,50.8     z M39.6,39.2c-0.3,0-0.6,0.3-0.6,0.6V50c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6V39.7C40.2,39.4,39.9,39.2,39.6,39.2z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <g>
                                {" "}
                                <path d="M49,47.6c-0.4,0-0.7-0.3-0.7-0.7V36.6c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7v10.3C49.7,47.3,49.4,47.6,49,47.6z"></path>{" "}
                                <path d="M49,47.7c-0.5,0-0.8-0.4-0.8-0.8V36.6c0-0.5,0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8v10.3C49.8,47.3,49.4,47.7,49,47.7z M49,36     c-0.3,0-0.6,0.3-0.6,0.6v10.3c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6V36.6C49.6,36.3,49.3,36,49,36z"></path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="">
                      <span className="text-secondary text-[60px] leading-[60px] font-semibold">
                        $500
                      </span>
                      <span className="text-secondary leading-[26.24px]">
                        / month
                      </span>
                    </div>
                  </section> */}
                {/* mid Section */}
                {/* <section className=" w-full h-auto text-secondary flex flex-col justify-center items-center">
                    <ul className=" w-full h-auto list-disc flex flex-col gap-4 items-center text-base leading-[28.8px] text-center">
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                      <li>All limited link</li>
                    </ul>
                  </section> */}
                {/* button */}
                {/* <section className=" w-full py-[4rem]">
                    <button
                      type="submit"
                      className="w-fit h-fit  py-4 px-7 mx-auto flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
                      Choose Plan
                    </button>
                  </section> 
                </section> */}
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
