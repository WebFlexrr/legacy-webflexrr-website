// import { client } from "@/config/SanityClient";

// export const getAllProjects = async (): Promise<getAllProjects[]> =>
//   await client.fetch(
//     `*[_type=="project"]{
//   id,
//   name,
//   "slug":slug.current,
//   description,
//   category,
//   projectOwnership,
//   previewSpacing,
//   "preview":preview.asset->url,
//   projectLink
// }`,
//     {},
//     { next: { tags: ["project"], revalidate: 3600 } },
//   );

export const getAllProjects = (): getAllProjects[] => allProjects;

const allProjects: getAllProjects[] = [
  {
    name: "Catelog Design",
    slug: "catelog-design",
    preview:
      "https://cdn.sanity.io/images/ewohzuts/production/2ea103d12038377281c5c8b59636c9ff7f7fd19c-2800x2100.jpg",
    projectLink: null,
    id: 2,
    description: "CATELOG DESIGN\n",
    category: "Designing",
    projectOwnership: "inHouse",
    previewSpacing: 2,
  },
  {
    category: "website",
    projectOwnership: "inHouse",
    previewSpacing: 2,
    projectLink: "https://www.ttezo.in/",
    name: "Portfolio Website",
    slug: "portfolio-website",
    description: "PORTFOLIO WEBSITE\n",
    id: 3,
    preview:
      "https://cdn.sanity.io/images/ewohzuts/production/897e0049e726ba26e08483782e9333f8ec13a44d-1909x913.jpg",
  },
  {
    id: 1,
    name: "Logo Mockup",
    category: "Logo",
    projectOwnership: "client",
    projectLink:
      "https://drive.google.com/drive/folders/1dbe1KAoCueVN_ZMMD2gs0AH1T3BLBg8p?usp=sharing",
    slug: "logo-mockup",
    description: "LOGO MOCKUP",
    previewSpacing: 1,
    preview:
      "https://cdn.sanity.io/images/ewohzuts/production/6a83948aca4fad76587fbac6c1487ba09640aab0-3000x2250.png",
  },
];
