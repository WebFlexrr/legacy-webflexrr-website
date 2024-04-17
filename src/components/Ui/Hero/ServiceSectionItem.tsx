// import Link from "next/link";
import React, { type FC } from "react";
import Image from "next/image";

interface ServiceSectionProps {
  name: string;
  slug: string;
  description: string;
  image: string;
}
const ServiceSectionItem: FC<ServiceSectionProps> = ({
  name,
  slug,
  description,
  image,
}) => {
  return (
    <section className=" servicesSections  w-full max-w-[20rem]  mx-auto mb-20  p-10 xl:px-0 flex flex-col gap-10 lg:gap-7 items-center border border-black rounded-lg group shadow-xl ">
      {/* <Link href={`/services/${slug}`}> */}
      <Image
        src={image}
        width={"1080"}
        height={"1080"}
        alt={name}
        // className="xl:absolute w-full xl:scale-75 xl:opacity-0 group-hover:visible group-hover:scale-100 group-hover:opacity-100 top-0 bg-white transition ease-in-out duration-300 "
        className=" relative w-[15rem]  mx-auto "
      />
      {/* </Link> */}

      <div className=" w-full h-fit text-center xl:px-11 mx-auto flex flex-col gap-5 md:gap-6 hover:text-primary">
        {/* <Link 
          href={`/services/${slug}`}
        > */}
        <span className=" text-secondary text-center  font-bold text-[30px] md:text-[30px] leading-[41.76px] group-hover:text-primary  transition ease-in-out duration-500">
          {name}
        </span>
        {/* </Link> */}
        <span className="">
          <p>{description.split(" ").splice(0, 20).join(" ").concat("....")}</p>
        </span>
      </div>
    </section>
  );
};

export default ServiceSectionItem;
