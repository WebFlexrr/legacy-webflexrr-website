import Hero from "@/components/Pages/Plans/Hero";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import React from "react";

const Plans = (): React.JSX.Element => {
  return (
    <>
      <MainTitle heading={"Our Plans"} />
      <Hero />
      <Footer />
    </>
  );
};

export default Plans;
