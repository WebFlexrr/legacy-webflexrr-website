import Image from "next/image";
import React, { type FC } from "react";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { imageUrlFor } from "@/config/SanityImageUrl";

interface ProjectItemProps {
  name: string;
  preview: SanityImageSource;
  category: string;
  projectOwnership: string;
}

const ProjectItem: FC<ProjectItemProps> = ({
  name,
  preview,
  category,
  projectOwnership,
}) => {
  return (
    <div className="relative w-full h-full group">
      <div className="relative w-full h-full ">
        <div className="relative w-full h-full after:absolute after:border-b-[2.4rem] lg:after:border-0 lg:group-hover:after:border-b-[2.4rem] xl:group-hover:after:border-[2.5rem] after:border-primary lg:group-hover:after:border-primary after:top-0 after:bottom-0 after:left-0 after:right-0 after:transition-all after:ease-in-out after:duration-500">
          <Image
            src={imageUrlFor(preview).url()}
            width={"1000"}
            height={"0"}
            alt={""}
            className="relative w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" absolute bottom-0 w-full h-fit  flex flex-col items-center ">
        <span className="absolute bottom-0 mb-14 text-primary hover:text-primary  text-[22px] md:text-[25px] lg:text-[29px] xl:text-[33px] font-semibold leading-[24px] md:leading-[29px] lg:leading-[34.4px] xl:leading-[39px] text-start transition ease-in-out duration-700">
          {name}
        </span>
        <span className="absolute visible lg:invisible group-hover:visible bottom-0 mb-2 text-secondary text-[14px] font-medium tracking-[2.8px] text-left uppercase transition ease-in-out duration-300 delay-1000">
          {category} - {projectOwnership}
        </span>
      </div>
    </div>
  );
};

export default ProjectItem;
