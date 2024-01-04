import ProjectSection from "@/components/Pages/Projects/ProjectSection";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import React from "react";

const Portfolio = (): React.JSX.Element => {
  return (
    <>
      <MainTitle heading={"Portfolio"} />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default Portfolio;
