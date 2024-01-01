import Project_Details from "@/components/Pages/ProjectDetails/ProjectDetails";
import Footer from "@/components/Ui/Footer/Footer";
import ProjectTitle from "@/components/Ui/ServicesDetails/ProjectTitle";
import React from "react";

const ProjectDetails = (): React.JSX.Element => {
  return (
    <>
      <ProjectTitle heading={"Business App"} />
      <Project_Details />
      <Footer />
    </>
  );
};

export default ProjectDetails;
