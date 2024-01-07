import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="w-full h-auto text-tertiary bg-background2 ">
      <section className="w-full h-auto py-[70px]">
        <section className="w-full max-w-[100rem] mx-auto flex flex-row flex-wrap lg:flex-row gap-10 lg:gap-0">
          {/* left */}
          <section className="w-full md:w-full lg:w-1/2 h-auto px-5">
            <div className="w-full max-w-[580px] h-auto px-5 flex flex-col gap-10">
              <Image
                src={"/logos/logo2.png"}
                width={"120"}
                height={"0"}
                alt={""}
                className=""
              />
              <div>
                <p>
                  At our agency, each project is a labor of passion and
                  commitment. With relentless dedication and meticulous effort,
                  we craft digital solutions that stand as a testament to the
                  hard work and time invested in building a robust online
                  presence for our clients.
                </p>
              </div>
              <div className=" w-full flex flex-wrap sm:flex-nowrap gap-5 xl:gap-2">
                <input
                  type="text"
                  title="Message"
                  className="w-full xl:w-[60%] bg-transparent focus:outline-none focus:border-secondary border-b  text-secondary"
                />
                <button
                  type="button"
                  title="button"
                  className=" w-fit h-fit lg:w-[30%] lg:h-11 py-3 px-3 rounded-full text-[24px] leading-[24px] font-base text-center text-secondary bg-primary border border-secondary md:bg-transparent md:border-transparent md:hover:border-secondary  md:hover:bg-primary after:w-full transition ease-in-out duration-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          {/* mid */}
          <section className="w-full md:w-[40%] lg:w-1/4 h-auto pl-10">
            <section className=" text-[26px] leading-[42px] font-normal text-secondary ">
              Contact
            </section>
            <address className="w-full max-w-[280px] mt-3 md:mt-5 lg:mt-8">
              <ul className="flex flex-col gap-3 md:gap-4 flex-wrap text-secondary">
                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Kolkata, West Bengal, India
                  </p>
                </li>
                <li className="w-full flex gap-2 text-secondary">
                  <span className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    <p>Phone :</p>
                  </span>
                  <ul>
                    <li>
                      <Link href={"tel:+917044785308"}>
                        <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                          +91 - 7044785308
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href={"tel:+919674128921"}>
                        <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                          +91 - 9674128921
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="w-full flex gap-2 text-secondary">
                  <span className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    <p>Mail :</p>
                  </span>
                  <Link href={"mailto:contact@webflexrr.com"} target="_blank">
                    <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                      contact@webflexrr.com
                    </p>
                  </Link>
                </li>
                <li className="w-full flex gap-2 text-secondary">
                  <span className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    <p>WhatsApp :</p>
                  </span>
                  <ul>
                    <li>
                      <Link href={"https://wa.me/917044785308"} target="_blank">
                        <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                          +91 - 7044785308
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://wa.me/919038007312"} target="_blank">
                        <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                          +91 - 9038007312
                        </p>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <p>Working Hours : 8hrs</p>
                </li> */}
              </ul>
            </address>
          </section>

          {/* right */}
          <section className="w-full md:w-[40%] lg:w-1/4 h-auto pl-10">
            <section className=" text-[26px] leading-[42px] font-normal text-secondary ">
              Services
            </section>
            <section className="w-full max-w-[280px] mt-3 md:mt-5 lg:mt-8">
              <ul className="flex flex-col gap-3 md:gap-4 flex-wrap cursor-default">
                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Branding & Identity
                  </p>
                </li>
                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Logo & Graphic designing
                  </p>
                </li>
                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Content Creation & Video Editing
                  </p>
                </li>

                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Web Design & Development
                  </p>
                </li>
                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Mobile App Development
                  </p>
                </li>
                <li>
                  <p className="text-[15px] md:text-base lg:hover:text-primary transition ease-in-out duration-500">
                    Digital Marketing
                  </p>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <section className="w-full h-auto border-t border-secondary">
        <section className="w-full max-w-[100rem] h-auto py-4 mx-auto flex flex-col gap-4 lg:flex-row lg:gap-2 item-center justify-between ">
          {/* left */}
          <address className="w-fit h-auto px-5 hidden lg:flex ">
            <ul className="w-fit  flex flex-wrap gap-2 items-center py-auto">
              <li>
                <Link
                  href={"/home"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                  aria-label="Home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                  aria-label="Services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/portfolio"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                  aria-label="Portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href={"/teams"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                  aria-label="Our teams"
                >
                  Our Teams
                </Link>
              </li>
              <li>
                <Link
                  href={"/plans"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                  aria-label="Out Plans"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="text-secondary  border border-transparent px-2 py-1 hover:border-black hover:bg-primary rounded-full transition ease-in-out duration-500"
                  aria-label="Contact Us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </address>
          {/* mid */}
          <address className="w-full lg:w-fit ">
            <ul className="w-fit flex gap-6 mx-auto">
              <li>
                <Link
                  href={"https://twitter.com/WebFlexRR"}
                  target="_blank"
                  className="w-[35px] h-[35px]  rounded-full flex items-center justify-center border border-grey1 border-secondary text-secondary bg-primary transition ease-in-out duration-300"
                  aria-label="Twitter"
                >
                  <BsTwitterX className="w-[14px] h-[14px] " />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.youtube.com/@webflexrr"}
                  target="_blank"
                  className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-grey1 border-secondary text-secondary bg-primary transition ease-in-out duration-300"
                  aria-label="Linkedin"
                >
                  <FaYoutube className="w-[16px] h-[16px] " />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.linkedin.com/company/webflexrr"}
                  target="_blank"
                  className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-grey1 border-secondary text-secondary bg-primary transition ease-in-out duration-300"
                  aria-label="Linkedin"
                >
                  <FaLinkedinIn className="w-[16px] h-[16px] " />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61553639945217"
                  }
                  target="_blank"
                  className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-grey1 border-secondary text-secondary bg-primary transition ease-in-out duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-[16px] h-[16px]" />
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.instagram.com/webflexrr"}
                  target="_blank"
                  className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-grey1 border-secondary text-secondary bg-primary transition ease-in-out duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-[17px] h-[17px]" />
                </Link>
              </li>
            </ul>
          </address>
          {/* right */}
          <section className="px-5 text-center">
            <p>
              Copyright &#169;2023, WebFlexrr Digital Services, All Rights
              Reserved.
            </p>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
