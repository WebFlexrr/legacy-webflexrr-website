"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PulseCircle from "@/components/Ui/PulseCircle";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import Heading from "@/components/Ui/Heading/Heading";

const schema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is Required"),
  companyName: yup.string().required("Company Name is Required"),
  additionalMessage: yup.string().required("Message is Required"),
});

type FormInput = yup.InferType<typeof schema>;

const ContactUs = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      additionalMessage: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormInput): Promise<void> => {
    const formData = {
      service_id: `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
      template_id: `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
      user_id: `${process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY}`,
      template_params: {
        from_name: data.firstName,
        from_email: data.email,
        to_name: "Tejodeep",
        message: data.additionalMessage,
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto py-20 px-8 md:px-5 xl:py-28 xl:px-0">
        <section className=" w-full max-w-[100rem] mx-auto h-auto flex flex-col">
          {/* Heading */}
          <section className=" w-full max-w-[90rem] h-auto m-auto text-secondary flex flex-col md:flex-row gap-3 md:gap-0  items-center justify-between   ">
            <section className="w-full md:w-[15%] lg:w-[13%] h-full ">
              <section className=" w-full h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="93"
                  viewBox="0 0 100 93"
                  className=" w-[110px] h-[110px] leading-[90px] relative block"
                >
                  <g id="Group_773" transform="translate(-1935.085 -655)">
                    {" "}
                    <path
                      id="Path_748"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      d="M1974.5,737.5h-37.4v-73.2h55.3v34.2h35.8V679h-27.7"
                    ></path>{" "}
                    <path
                      id="Path_749"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      d="M1974.5,745.7h58.6v-35.8h-58.6v27.7"
                    ></path>{" "}
                    <path
                      id="Path_750"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      d="M1974.5,718l24.9,12.5c2.7,1.4,6,1.4,8.7,0l24.9-12.5"
                    ></path>{" "}
                    <ellipse
                      id="Ellipse_56"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      cx="1950.4"
                      cy="678.9"
                      rx="4.7"
                      ry="5.1"
                    ></ellipse>{" "}
                    <line
                      id="Line_69"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      x1="1945.6"
                      y1="693.4"
                      x2="1984.2"
                      y2="693.4"
                    ></line>{" "}
                    <line
                      id="Line_70"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      x1="1945.6"
                      y1="702"
                      x2="1984.2"
                      y2="702"
                    ></line>{" "}
                    <line
                      id="Line_71"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      x1="1945.6"
                      y1="709.7"
                      x2="1966.2"
                      y2="709.7"
                    ></line>{" "}
                    <line
                      id="Line_72"
                      className="st0"
                      style={{
                        fill: "none",
                        stroke: "currentcolor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }}
                      x1="1945.6"
                      y1="727.7"
                      x2="1951.6"
                      y2="727.7"
                    ></line>
                  </g>
                </svg>
              </section>
            </section>
            <section className="w-full md:w-[48%] lg:w-[46%] h-full">
              <section className=" text-[44px] xl:text-[47px] 2xl:text-[60px] leading-[52px] xl:leading-[57px] 2xl:leading-[72px] font-semibold  text-start text-primary">
                <span>We Provide A Digital Platform</span>
              </section>
            </section>
            <section className="w-full md:w-[37%] lg:w-[33%] h-full">
              <section className=" ">
                <p>
                  Discover the essence of innovation through our diverse
                  portfolio. Each project at WebFlexrr is a testament to
                  creativity, precision, and transformative digital solutions.
                  Explore the journey of success we&apos;ve crafted for our
                  clients.
                </p>
              </section>
            </section>
          </section>

          {/* Body */}
          <section className=" w-full h-auto mt-40 flex flex-col lg:flex-row lg:justify-between">
            {/* Right side */}
            <section className=" w-full lg:w-[55%] xl:w-[68%] h-full py-16 lg:py-0">
              <section className="w-full h-full pr-32 flex flex-col gap-6">
                <div className=" hero1 w-full h-fit flex gap-6 items-center    ">
                  <PulseCircle />
                  <span className="text-[20px] sm:text-[26px] leading-[42.64px] text-primary">
                    Get in Touch
                  </span>
                </div>

                <section className="w-full h-full flex flex-col gap-16">
                  <section className="w-full xl:pr-28 text-left ">
                    <h3 className="text-left">
                      Do you have any querries please reach us
                    </h3>
                  </section>
                  <form
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-fit flex flex-wrap gap-0 "
                  >
                    <span className="w-full lg:w-1/2 h-fit  text-paragraph text-[16px] pb-10 lg:pr-11">
                      <input
                        type="text"
                        id="firstName"
                        className="w-full bg-transparent py-[15px] focus:outline-none border-b-2 border-paragraph"
                        placeholder="First Name"
                        {...register("firstName")}
                      />
                      <p>{errors.firstName?.message}</p>
                    </span>
                    <span className="w-full lg:w-1/2 h-fit text-paragraph text-[16px] pb-10 lg:pl-11">
                      <input
                        type="text"
                        id="lastName"
                        className="w-full h-fit bg-transparent py-[15px] focus:outline-none border-b-2 border-paragraph"
                        placeholder="Last Name"
                        {...register("lastName")}
                      />
                      <p>{errors.lastName?.message}</p>
                    </span>
                    <span className="w-full lg:w-1/2 h-fit text-paragraph text-[16px] pb-10 lg:pr-11">
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent py-[15px] focus:outline-none border-b-2 border-paragraph"
                        placeholder="Your Email"
                        {...register("email")}
                      />
                      <p>{errors.email?.message}</p>
                    </span>
                    <span className="w-full lg:w-1/2 h-fit text-paragraph text-[16px] pb-10 lg:pl-11">
                      <input
                        type="text"
                        id="companyName"
                        className="w-full bg-transparent py-[15px] focus:outline-none border-b-2 border-paragraph"
                        placeholder="Company Name"
                        {...register("companyName")}
                      />
                      <p>{errors.companyName?.message}</p>
                    </span>
                    <textarea
                      id="additionalMessage"
                      cols={4}
                      rows={4}
                      placeholder="Additional Message"
                      className="w-full h-32 resize-y bg-transparent py-[15px] text-paragraph text-[16px] focus:outline-none border-b-2 border-paragraph"
                      {...register("additionalMessage")}
                    />
                    <p>{errors.additionalMessage?.message}</p>
                    <button
                      type="submit"
                      className="w-fit h-fit py-3 px-10 mt-20 flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
                      Submit
                    </button>
                  </form>
                </section>
              </section>
            </section>
            {/* Left Side */}
            <section className=" relative w-full lg:w-[45%] xl:w-[32%] h-[40rem] lg:h-full p-14 border border-primary rounded-lg ">
              <section className="w-full h-auto flex flex-col items-start gap-6">
                <h2>Say Hello !</h2>
                <p>
                  Duis convallis convallis pretium nibh ipsumtellus id interdum
                  velit laoreet.
                </p>
                <Image
                  src={"/assets/career-img.jpg"}
                  width={"1000"}
                  height={"0"}
                  className="w-full h-full object-cover"
                  alt={""}
                />
              </section>
              <section className="w-full h-auto mt-20 flex flex-col gap-4 ">
                <h4>Enquires</h4>
                <span>webflexrr@gmail.com</span>
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
              </section>
            </section>
          </section>
        </section>

        {/* Address & Location */}
        <section className="w-full h-auto mt-40 ">
          <section className=" w-full h-auto m-auto text-secondary flex flex-col gap-3 items-center justify-between">
            <Heading heading={null} subHeading={"Our Affiliate Branches"} />
            <div className="w-full max-w-[60%] mx-auto text-center ">
              Et tortor consequat id porta nibh venenatis cras sed felis.
              Pharetra diam sit amet nisl suscipit. Etiam dignissim diam quis
              enim lobortis scelerisque fermentum. Volutpat blandit aliquam
              etiam velit sceleris.
            </div>
          </section>
          <section className="relative w-full h-auto mt-16 mb-[500px] z-0">
            <section className="relative w-full max-w-[100rem] mx-auto h-auto flex justify-center gap-4 z-10">
              <div className="w-1/4 h-auto px-14 py-20 flex flex-col gap-10 bg-background3 border border-secondary hover:border-primary ">
                <h5 className="text-primary">Canbeera</h5>
                <h5>45 Laggon Street, Canberra, Looloith, E1 6GL</h5>
                <h5>+00 (0)12 34 56 789 canbeera@example.com</h5>
              </div>
              <div className="w-1/4 h-auto px-14 py-20 flex flex-col gap-10 bg-background3 border border-secondary hover:border-primary ">
                <h5 className="text-primary">Canbeera</h5>
                <h5>45 Laggon Street, Canberra, Looloith, E1 6GL</h5>
                <h5>+00 (0)12 34 56 789 canbeera@example.com</h5>
              </div>
              <div className="w-1/4 h-auto px-14 py-20 flex flex-col gap-10 bg-background3 border border-secondary hover:border-primary ">
                <h5 className="text-primary">Canbeera</h5>
                <h5>45 Laggon Street, Canberra, Looloith, E1 6GL</h5>
                <h5>+00 (0)12 34 56 789 canbeera@example.com</h5>
              </div>
            </section>
            <section className="absolute -bottom-[515px] -z-10 w-full ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d460.31440373094006!2d88.4096017!3d22.6345709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef1ff6e4e3e2ac3%3A0x2ef1ce449bfd9b0c!2sWebflexrr%20Digital%20Services!5e0!3m2!1sen!2sin!4v1705682875020!5m2!1sen!2sin"
                className="w-full h-[550px]"
                loading="lazy"
                allowFullScreen={true}
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ContactUs;
