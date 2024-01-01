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
      <div className="bg-fixed w-full h-auto object-cover">
        <section className="w-full h-auto flex flex-col items-center py-24 xl:mt-28">
          <section className="w-fit h-auto flex flex-col gap-4 items-center">
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
