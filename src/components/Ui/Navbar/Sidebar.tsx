"use client";
import React, { type FC } from "react";
import { RxCross2 } from "react-icons/rx";

interface SideBarProps {
  hidden: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar: FC<SideBarProps> = ({ hidden, toggle }) => {
  return (
    <aside
      className={`fixed ${
        !hidden ? " invisible translate-x-[15rem]" : " visible translate-x-0"
      } w-full h-full flex justify-end bg-transparent z-50 transition-all ease-in-out duration-700`}
    >
      <section className="w-[15rem] h-full bg-background2">
        <nav className="w-full h-fit">
          <ul className="w-full h-auto flex flex-col text-base leading-[42px] tracking-[2.8px] text-left ">
            <li className="w-full px-5 py-3 border-b border-subHeading flex justify-end ">
              <RxCross2
                onClick={() => {
                  toggle(false);
                }}
                className="w-6 h-6 text-secondary"
              />
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <a
                href={"/#home"}
                onClick={() => {
                  toggle(false);
                }}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Home
              </a>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <a
                href={"/#services"}
                onClick={() => {
                  toggle(false);
                }}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Services
              </a>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <a
                href={"/#gallery"}
                onClick={() => {
                  toggle(false);
                }}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Gallery
              </a>
            </li>
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <a
                href={"/#ourTeam"}
                onClick={() => {
                  toggle(false);
                }}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Our Teams
              </a>
            </li>
            {/* <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <Link
                href={"/#blog"}
                onClick={() => toggle(false)}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Blogs
              </Link>
            </li> */}
            <li className="w-full h-11 p-0 border-b border-subHeading hover:bg-primary ">
              <a
                href={"/#contactUs"}
                onClick={() => {
                  toggle(false);
                }}
                className="w-full h-full px-5 flex justify-start  text-secondary transition ease-in-out duration-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBar;
