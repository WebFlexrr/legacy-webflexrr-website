import Image from "next/image";
import React, { type FC } from "react";
import PulseCircle from "../PulseCircle";
import Link from "next/link";

interface ServiceItemsProps {
  image: string;
  title: string;
  slug: string;
}

const ServiceItems: FC<ServiceItemsProps> = ({ title, image, slug }) => {
  return (
    <div className="w-full h-full flex flex-col  ">
      <Link
        href={`services/${slug}`}
        className="relative w-full h-full  aspect-[4/3] group z-10 overflow-hidden"
      >
        <Image
          src={image}
          alt=""
          width={"1000"}
          height={"0"}
          className="relative w-full h-full bg-cover group-hover:scale-105 transition-transform duration-300 ease-in"
        />
        <div className="absolute bottom-0 invisible  group-hover:visible translate-y-[0.2rem] group-hover:translate-y-0 flex items-center justify-center w-full h-[100px] shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 z-0 transition ease-in duration-100">
          <span className="flex gap-3 text-secondary">
            <PulseCircle />
            Read More
          </span>
        </div>
      </Link>
      <div className="w-full flex items-center mt-10 ">
        <Link
          href={`service/${title}`}
          className="text-[30px] mx-auto leading-[34.8px] font-semibold text-center text-secondary hover:text-primary transition duration-700 ease-in-out"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ServiceItems;
