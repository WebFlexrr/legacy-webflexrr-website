import HeroServices from "@/components/Pages/Services/HeroServices";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import SocialCarousel from "@/components/Ui/SocialPostsCarousel/SocialCarousel";
import React from "react";

const Services = (): JSX.Element => {
  return (
    <>
      <MainTitle heading={"Services"} />
      <HeroServices />
      <SocialCarousel />
      <Footer />
    </>
  );
};

export default Services;
