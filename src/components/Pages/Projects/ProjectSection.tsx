import Heading from "@/components/Ui/Heading/Heading";
import ProjectItem from "@/components/Ui/Projects/ProjectItem";
import { getAllProjects } from "@/lib/getProjects";
import Link from "next/link";
import React from "react";

const ProjectSection = (): React.JSX.Element => {
  const projects = getAllProjects();
  const sortedProjectList = projects.sort((a, b) => a.id - b.id);

  return (
    <section className="w-full h-auto ">
      <section className=" w-full h-auto  px-5 xl:py-36 xl:pb-20">
        <section className=" w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-20 ">
          <Heading heading={"Gallery"} subHeading={"Our Project Portfolio"} />

          {/* Main Section */}
          <section className="w-full h-auto flex flex-col gap-3 md:gap-4 lg:gap-6 ">
            <section className=" w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row flex-wrap gap-4 lg:gap-6 justify-between">
              {sortedProjectList.map((item) =>
                item.previewSpacing === 1 ? (
                  <div
                    key={item.id}
                    className="w-full  aspect-[4/3.3]  col-span-1 "
                  >
                    <Link href={item.projectLink ?? " "} target="_blank">
                      <ProjectItem ProjectItemData={item} />
                    </Link>
                  </div>
                ) : item.previewSpacing === 2 ? (
                  <div
                    key={item.id}
                    className="w-full aspect-[4/3.3] md:aspect-[16/6.4] col-span-1 md:col-span-2 "
                  >
                    <Link href={item.projectLink ?? ""} target="_blank">
                      <ProjectItem ProjectItemData={item} />
                    </Link>
                  </div>
                ) : item.previewSpacing === 3 ? (
                  <section
                    key={item.id}
                    className="w-full aspect-[4/3.3] md:aspect-[16/6.4] lg:aspect-[16/4]  grid-cols-1 md:col-span-2  lg:col-span-3"
                  >
                    <div className="w-full h-full ">
                      <Link href={item.projectLink ?? ""} target="_blank">
                        <ProjectItem ProjectItemData={item} />
                      </Link>
                    </div>
                  </section>
                ) : (
                  <></>
                ),
              )}
            </section>
          </section>
          <section className="w-full h-auto  ">
            {/* <button
              type="submit"
              className="w-fit h-fit py-4 px-7 mx-auto flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
            >
              <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
              Load More
            </button> */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectSection;
