import ProjectSection from "@/components/Pages/Projects/ProjectSection";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import React from "react";

const Plans = (): React.JSX.Element => {
  return (
    <>
      <MainTitle heading={"Our Plans"} />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default Plans;
