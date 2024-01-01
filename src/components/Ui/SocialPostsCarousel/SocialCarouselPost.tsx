import React from "react";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const SocialCarouselPost = (): React.JSX.Element => {
  return (
    // <div className="relative w-full h-full xl:w-[360px] xl:h-[360px] group">
    <div className="relative w-full h-full group">
      <Image
        src={"/assets/home-one-instagram-1.jpg"}
        width={"1000"}
        height={"0"}
        alt={""}
        className="relative"
      />
      <div className="absolute w-full h-full bg-black scale-90 opacity-0  group-hover:visible group-hover:scale-100 group-hover:opacity-90 top-0 transition ease-in-out duration-700 ">
        <div className="w-full h-full flex flex-col items-center justify-center border border-primary">
          <div className="w-fit h-fit  flex flex-col items-center gap-3 ">
            <div className="w-24 h-24 rounded-full p-6 border-4 border-secondary">
              <BsInstagram className=" w-full h-full text-secondary" />
            </div>
            <p className="mt-3">Follow Us on Instagram</p>
            <Link
              rel="stylesheet"
              href=""
              className="text-[26px] text-secondary leading-[30px] tracking-wide"
            >
              @Gaaga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCarouselPost;
