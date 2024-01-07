import Hero from "@/components/Pages/Plans/Hero";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import getAllPlans from "@/lib/getPlans";
import React from "react";

const Plans = async (): Promise<React.JSX.Element> => {
  const getPlans = await getAllPlans();
  const allPlans = getPlans.sort((a, b) => a.id - b.id);
  return (
    <>
      <MainTitle heading={"Our Plans"} />
      <Hero plans={allPlans} />
      <Footer />
    </>
  );
};

export default Plans;
