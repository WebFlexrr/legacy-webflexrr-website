"use client";
import React, { useState } from "react";
import SideBar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

const Navbar = (): React.JSX.Element => {
  const [sideBarHidden, setSideBarHidden] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 h-16  lg:h-24 flex items-center justify-center ">
        <div className="absolute  w-full h-full  shadow-2xl  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-100 z-0 " />
        <section className=" animate-visible-from-down ease-in-out-expo  w-full max-w-[110rem] px-5  flex justify-between items-center z-10 ">
          <a href={"/"}>
            <Image
              src={"/logos/logo.png"}
              width={"250"}
              height={"0"}
              alt={""}
              className="w-36 lg:w-48"
            />
          </a>
          <nav className="hidden xl:block">
            <ul className="flex gap-10 text-sm font-medium leading-[25px] tracking-[2.8px] uppercase ">
              <li>
                <a
                  href={"/"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href={"/services"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href={"/our-projects"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href={"/our-teams"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  TEAMS
                </a>
              </li>
              <li>
                <Link
                  href={"/plans"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  Plans
                </Link>
              </li>
              <li>
                <a
                  href={"/#contactUs"}
                  className="text-secondary hover:text-primary transition ease-in-out duration-500"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </nav>

          <section className="flex items-center gap-10">
            <button
              onClick={() => {
                setSideBarHidden(true);
              }}
              className="flex xl:hidden items-center text-secondary"
              aria-label="Open Menus"
            >
              <span className="p-2 space-y-1  rounded text-secondary ">
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
              </span>
              <span className="hidden md:block">Menu</span>
            </button>

            <Link
              href={"https://wa.me/917044785308"}
              target="_blank"
              className="hidden lg:flex w-fit h-fit py-4 px-7  items-center border border-secondary text-secondary hover:text-primary hover:border-primary transition ease-in-out duration-500"
            >
              <RiWhatsappFill className="w-[25px] h-[25px] text-[#25D366] mr-2" />{" "}
              Lets Contact Us
            </Link>
          </section>
        </section>
      </header>
      <Link
        href={"https://wa.me/917044785308"}
        target="_blank"
        className="fixed lg:hidden bottom-5 right-4 flex w-fit h-fit py-2 px-3 z-50 bg-white rounded-full  items-center border border-secondary drop-shadow-lg text-secondary"
      >
        <RiWhatsappFill className="w-[30px] h-[30px] text-[#25D366] mr-1" />{" "}
        Contact
      </Link>
      <SideBar
        hidden={sideBarHidden}
        toggle={() => {
          setSideBarHidden(false);
        }}
      />
    </>
  );
};

export default Navbar;
