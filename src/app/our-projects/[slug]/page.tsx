import Project_Details from "@/components/Pages/ProjectDetails/ProjectDetails";
import Footer from "@/components/Ui/Footer/Footer";
import Navbar from "@/components/Ui/Navbar/Navbar";
import ProjectTitle from "@/components/Ui/ServicesDetails/ProjectTitle";
import React from "react";

const ProjectDetails = (): React.JSX.Element => {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      <ProjectTitle heading={"Business App"} picture={""} />
      <Project_Details />
      <Footer />
    </main>
  );
};

export default ProjectDetails;
