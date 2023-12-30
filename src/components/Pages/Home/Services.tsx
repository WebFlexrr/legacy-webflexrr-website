import React from "react";
import Heading from "../../Ui/Heading/Heading";
import ServiceSection from "@/components/Ui/Hero/ServiceSection";
import { getAllServices } from "@/lib/getServices";

const Services = async (): Promise<React.JSX.Element> => {
  const services = await getAllServices();

  return (
    <section className=" services w-full h-auto " id={"services"}>
      <section className=" w-full h-auto py-20 lg:pt-28">
        <Heading heading={"Services"} subHeading={"What We Have to Offer"} />
        <ServiceSection data={services} />
      </section>
    </section>
  );
};

export default Services;
