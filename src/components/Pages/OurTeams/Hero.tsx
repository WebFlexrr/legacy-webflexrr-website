import Heading from "@/components/Ui/Heading/Heading";
import TeamPicture from "@/components/Ui/TeamPicture";
import { getAllManagementData } from "@/lib/getManagement";
import React from "react";

const Hero = (): React.JSX.Element => {
  const allTeamsDetails = getAllManagementData();
  return (
    <section className="w-full h-auto">
      <section className="w-full h-auto py-20 px-5 xl:py-36">
        <section className="w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
          <Heading heading={"Top Authorities"} subHeading={"Our Management"} />
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5 gap-y-10 ">
            {allTeamsDetails.map((personDetails) => (
              <TeamPicture
                personDetails={personDetails}
                key={personDetails._id}
              />
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
