import React from "react";
import Heading from "../../Ui/Heading/Heading";
import GalleryContentSection from "@/components/Ui/Hero/GalleryContentSection";

const Gallery = (): React.JSX.Element => {
  return (
    <section id="gallery" className="gallery relative w-full h-auto ">
      <section className="w-full h-full py-20 lg:py-28">
        <section className="w-full flex flex-col gap-7 px-4 sm:px-2 md:px-0 mx-auto text-white">
          <Heading heading={"Gallery"} subHeading={"Our Project Portfolio"} />
          <GalleryContentSection />
        </section>
      </section>
    </section>
  );
};

export default Gallery;
