import ServiceItems from "@/components/Ui/Services/ServiceItems";
import { getAllServices } from "@/lib/getServices";

const HeroServices = async (): Promise<JSX.Element> => {
  const services = await getAllServices();
  return (
    <section className="w-full h-auto ">
      <section className="w-full h-auto py-20 px-8 md:px-5 xl:py-28">
        <section className=" w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-20">
          {/* Heading */}
          <section className=" w-full max-w-[80rem] h-auto m-auto text-secondary flex flex-col md:flex-row gap-3 md:gap-0  items-center justify-between   ">
            <section className="w-full md:w-[15%] lg:w-[13%] h-full ">
              <section className=" w-full h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="93"
                  viewBox="0 0 100 93"
                  className=" w-[90px] h-[90px] leading-[90px] relative block"
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
              <section className=" text-[44px] xl:text-[47px] 2xl:text-[52.6px] leading-[52px] xl:leading-[57px] 2xl:leading-[63px] font-semibold  text-start text-primary">
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

          <section className=" w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14  md:gap-x-20 lg:gap-14 xl:gap-x-[5rem] xl:gap-y-28 ">
            {services.map((items) => (
              <ServiceItems
                key={items._id}
                title={items.name}
                image={items.image}
                slug={items.slug}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default HeroServices;
