import Heading from "@/components/Ui/Heading/Heading";
import React from "react";

const Hero = (): React.JSX.Element => {
  return (
    <section className="w-full h-auto  ">
      <section className="w-full h-auto py-20 px-5 xl:py-36">
        <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
          <Heading heading={"Top Authorities"} subHeading={"Our Management"} />
          {/* <section className="w-full h-auto grid grid-cols-4 gap-x-5 gap-y-16 "> */}
          {/* <section className="w-full h-auto flex flex-col md:flex-row flex-wrap gap-x-5 gap-y-10 "> */}
          <section className="w-full h-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10 ">
            {/* <TeamPicture />
            <TeamPicture />
            <TeamPicture />
            <TeamPicture />
            <TeamPicture />
            <TeamPicture />
            <TeamPicture /> */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
