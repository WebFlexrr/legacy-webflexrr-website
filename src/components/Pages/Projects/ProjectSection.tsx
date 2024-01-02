import ProjectItem from "@/components/Ui/Projects/ProjectItem";
import getAllProjects from "@/lib/getProjects";
import Link from "next/link";
import React from "react";

const ProjectSection = async (): Promise<React.JSX.Element> => {
  const projects = await getAllProjects();
  const sortedProjectList = projects.sort((a, b) => a.id - b.id);

  // const LayoutSort = () => {
  //   let temp: getAllProjectsProps[] = [];

  //   for (let i: number = 0; i < sortedProjectList.length; i++) {
  //     if (sortedProjectList[i].previewSpacing == 3) {
  //       return temp.concat(sortedProjectList[i]);
  //     } else if (sortedProjectList[i].previewSpacing == 2) {
  //       if (sortedProjectList[i - 2].previewSpacing != 2) {
  //         return temp.concat(sortedProjectList[i]);
  //       }
  //     } else {
  //       if (
  //         sortedProjectList[i - 1].previewSpacing == 1 &&
  //         sortedProjectList[i - 2].previewSpacing == 1
  //       ) {
  //         return temp.concat(sortedProjectList[i]);
  //       }
  //     }
  //   }

  //   return temp;
  // };

  return (
    <section className="w-full h-auto ">
      <section className=" w-full h-auto  px-5 xl:py-36 xl:pb-20">
        <section className=" w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-20 ">
          {/* Heading */}
          <section className=" w-full h-auto text-secondary flex flex-col md:flex-row gap-3 md:gap-0  items-center ">
            <section className=" w-full md:w-[15%] lg:w-[20%] h-full  ">
              <section className="  w-full h-full flex items-center   ">
                <svg
                  width="100"
                  height="93"
                  viewBox="0 0 100 93"
                  className=" w-[90px] h-[90px] leading-[90px] relative block"
                >
                  <g
                    data-name="Group 742"
                    transform="translate(-1079.085 -243)"
                  >
                    <line
                      data-name="Line 51"
                      x2="32"
                      transform="translate(1092.085 249)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                    <line
                      data-name="Line 52"
                      x2="31"
                      transform="translate(1136.085 249)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                    <circle
                      data-name="Ellipse 53"
                      cx="5"
                      cy="5"
                      r="5"
                      transform="translate(1082.085 244)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></circle>
                    <ellipse
                      data-name="Ellipse 54"
                      cx="5.5"
                      cy="5"
                      rx="5.5"
                      ry="5"
                      transform="translate(1167.085 244)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></ellipse>
                    <g
                      data-name="Group 740"
                      transform="translate(1080.085 287.75)"
                    >
                      <path
                        data-name="Path 725"
                        d="M1085.66,344h-5.575v10.5h10.5V344h-4.925"
                        transform="translate(-1080.085 -344)"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        data-name="Path 726"
                        d="M1285.01,344h-4.925v10.5h10.5V344h-5.575"
                        transform="translate(-1192.585 -344)"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </g>
                    <g data-name="Group 741" transform="translate(1085.66 244)">
                      <path
                        data-name="Path 727"
                        d="M1131,256.8a43.738,43.738,0,0,0-38.175,38.15"
                        transform="translate(-1092.827 -251.2)"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        data-name="Path 728"
                        d="M1242.26,294.95a43.738,43.738,0,0,0-38.175-38.15"
                        transform="translate(-1155.41 -251.2)"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        data-name="Path 729"
                        d="M1180.085,256.8v4.9h10.5v-4.9"
                        transform="translate(-1141.91 -251.2)"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                      <path
                        data-name="Path 730"
                        d="M1180.085,249.6V244h10.5v5.6"
                        transform="translate(-1141.91 -244)"
                        fill="none"
                        stroke="currentcolor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </g>
                    <line
                      data-name="Line 53"
                      x2="10"
                      transform="translate(1124.085 267)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                    <line
                      data-name="Line 54"
                      y2="22"
                      transform="translate(1129.085 267)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                    <path
                      data-name="Path 731"
                      d="M1185.335,348a5.25,5.25,0,1,1-5.25,5.25"
                      transform="translate(-56.25 -58.5)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      data-name="Path 732"
                      d="M1209.335,341.5l7-17.5s-12.25-17.5-12.25-28"
                      transform="translate(-69.75 -29.25)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      data-name="Path 733"
                      d="M1159.085,341.5l-7-17.5s12.25-17.5,12.25-28"
                      transform="translate(-40.5 -29.25)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <path
                      data-name="Path 734"
                      d="M1169.585,412.75h17.5V404h-35v8.75h5.25V425"
                      transform="translate(-40.5 -90)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <line
                      data-name="Line 55"
                      y2="12"
                      transform="translate(1143.085 323)"
                      fill="none"
                      stroke="currentcolor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></line>
                  </g>
                </svg>
              </section>
            </section>
            <section className=" w-full md:w-[48%] lg:w-[46%] h-full">
              <section className=" text-[44px] xl:text-[47px] 2xl:text-[52.6px] leading-[52px] xl:leading-[57px] 2xl:leading-[63px] font-semibold  text-start text-primary">
                <span>Our Best Innovative & Creative Work</span>
              </section>
            </section>
            <section className=" w-full md:w-[37%] lg:w-[33%] h-full">
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
