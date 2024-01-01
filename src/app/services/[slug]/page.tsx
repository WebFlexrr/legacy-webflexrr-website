import ServiceDetails from "@/components/Pages/ServiceDetails/ServiceDetails";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";
import Social_carousel from "@/components/Ui/SocialPostsCarousel/SocialCarousel";
import { findServiceByName } from "@/lib/getServices";
import { type Metadata } from "next";
import React, { type FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const serviceDetails = await findServiceByName(params.slug);

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!serviceDetails) {
    return {
      title: "Not Found",
      description: "This page is not Found",
    };
  }

  return {
    title: serviceDetails.name,
    description: serviceDetails.description,
    alternates: {
      canonical: `/services/${params.slug}`,
      languages: {
        "en-US": `/en-US/services/${params.slug}`,
        "de-DE": `/de-DE/services/${params.slug}`,
      },
    },
  };
};

const page: FC<PageProps> = async ({ params }) => {
  const serviceDetails = await findServiceByName(params.slug);

  return (
    <>
      <MainTitle heading={params.slug} />
      <ServiceDetails serviceDetails={serviceDetails} />
      {/* <CaseStudy/> */}
      <Social_carousel />
      <Footer />
    </>
  );
};

export default page;
