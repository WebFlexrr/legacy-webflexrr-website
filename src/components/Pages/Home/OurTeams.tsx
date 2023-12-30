import Heading from "@/components/Ui/Heading/Heading";
import React from "react";
import TeamSwiper from "@/components/Ui/Hero/TeamSwiper";
import getAllManagementData from "@/lib/getManagement";

const OurTeams = async (): Promise<React.JSX.Element> => {
  const allTeamsDetails = await getAllManagementData();

  return (
    <section id={"ourTeam"} className=" relative w-full h-auto bg-background3 ">
      <section className="w-full py-20 lg:py-28 ">
        <section className="w-full max-w-[100rem] mx-auto px-5 md:px-10 flex flex-col gap-7 ">
          <Heading
            heading={"Our Team"}
            subHeading={"Speak With One of Our Experts"}
          />
          <TeamSwiper allTeamsDetails={allTeamsDetails} />
        </section>
      </section>
    </section>
  );
};

export default OurTeams;
