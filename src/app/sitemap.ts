import { getAllServices } from "@/lib/getServices";

const sitemap = async (): Promise<
  Array<{
    url: string;
    lastModified: Date;
  }>
> => {
  const baseUrl = "https://www.webflexrr.com";

  const services = getAllServices();

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service._updatedAt),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    ...serviceUrls,
  ];
};

export default sitemap;
