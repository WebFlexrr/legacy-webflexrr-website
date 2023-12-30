import Hero from "@/components/Pages/Services/Hero";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import Navbar from "@/components/Ui/Navbar/Navbar";
import Social_carousel from "@/components/Ui/SocialPostsCorossal.tsx/SocialCarousel";
import React from "react";

const Services = async (): Promise<React.JSX.Element> => {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth">
      <Navbar />
      <MainTitle heading={"Services"} picture={""} />
      <Hero />
      <Social_carousel />
      <Footer />
    </main>
  );
};

export default Services;
