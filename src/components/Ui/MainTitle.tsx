"use client";
import React, { type FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MainTitleProps {
  heading: string;
}
const MainTitle: FC<MainTitleProps> = ({ heading }) => {
  const pathname = usePathname();
  const titlePathname = pathname.split("/").join(" / ");
  return (
    <section className=" relative w-full h-auto">
      <div className=" bg-background3  w-full h-auto flex justify-center px-8 md:px-5 xl:pt-0">
        <section className=" w-full max-w-[100rem] h-auto flex justify-center md:justify-start py-16 mt-16 md:pt-24 lg:mt-24 xl:pt-28 ">
          <section className="w-fit h-auto flex flex-col  gap-4 items-center md:items-start">
            <h1>{heading}</h1>
            <p className="">
              <Link href={"/"} className="text-primary">
                Home
              </Link>
              {titlePathname}
            </p>
          </section>
        </section>
      </div>
    </section>
  );
};

export default MainTitle;
