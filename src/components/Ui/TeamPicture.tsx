"use client";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { type FC, useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

interface TeamPictureProps {
  personDetails: getAllManagementData;
}

const TeamPicture: FC<TeamPictureProps> = ({ personDetails }) => {
  const teamProject = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".teamPicture", {
        y: 30,
        opacity: 0,
        duration: 1,
      });
    }, teamProject);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={teamProject} className="w-full  h-auto group flex flex-col gap-9">
      <div className="relative w-full h-auto border-4 group-hover:border-primary border-transparent z-10 transition ease-in-out duration-700">
        <Image
          src={personDetails.profileImage}
          width={"790"}
          height={"920"}
          alt=""
          className="relative w-full h-full aspect-[4/5.4] grayscale group-hover:grayscale-0 z-0 transition ease-in-out duration-700"
        />
        <div className="absolute bottom-0 w-full h-16 bg-transparent text-secondary opacity-0 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-4 flex items-center justify-center cursor-pointer transition ease-in-out duration-700">
          <span className="text-lg flex items-center">
            {personDetails.linkedIn != null && (
              <>
                <span className="text-primary"> - </span>
                <Link
                  href={personDetails.linkedIn}
                  target="_blank"
                  className="w-[34px] h-[34px] mx-2 rounded-full flex items-center justify-center border-2  border-white text-secondary bg-primary cursor-pointer hover:text-[#0077b5] transition ease-in-out duration-500"
                >
                  <FaLinkedinIn className="w-[14px] h-[14px] " />
                </Link>
                <span className="text-primary"> - </span>
              </>
            )}
            {personDetails.twitter != null && (
              <>
                <Link
                  href={personDetails.twitter}
                  target="_blank"
                  className="w-[34px] h-[34px] mx-2 rounded-full flex items-center justify-center border-2  border-white text-secondary bg-primary cursor-pointer hover:text-black transition ease-in-out duration-500"
                >
                  <BsTwitterX className="w-[14px] h-[14px]  " />
                </Link>
                <span className="text-primary"> - </span>
              </>
            )}

            {personDetails.youtube != null && (
              <>
                <Link
                  href={personDetails.youtube}
                  target="_blank"
                  className="w-[34px] h-[34px] mx-2 rounded-full flex items-center justify-center border-2  border-white text-secondary bg-primary cursor-pointer hover:text-[#CD201F] transition ease-in-out duration-500"
                >
                  <FaYoutube className="w-[14px] h-[14px] " />
                </Link>
                <span className="text-primary"> - </span>
              </>
            )}

            {personDetails.instagram != null && (
              <>
                <Link
                  href={personDetails.instagram}
                  target="_blank"
                  className="w-[34px] h-[34px] mx-2 rounded-full flex items-center justify-center border-2  border-white text-secondary bg-primary cursor-pointer hover:text-[#d62976] transition ease-in-out duration-500"
                >
                  <FaInstagram className="w-[16px] h-[16px]" />
                </Link>
                <span className="text-primary"> - </span>
              </>
            )}
          </span>
        </div>
      </div>
      <section className="w-full h-auto text-start flex flex-col gap-2">
        <span className="text-[26px] text-secondary font-normal leading-[30px] ">
          {personDetails.name}
        </span>
        <p className="text-primary font-normal leading-[30px] ">
          {personDetails.position}
        </p>
      </section>
    </div>
  );
};

export default TeamPicture;
