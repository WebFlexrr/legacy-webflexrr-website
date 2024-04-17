// import { client } from "@/config/SanityClient";

// export const getAllManagementData = async (): Promise<getAllManagementData[]> =>
//   await client.fetch(
//     `*[_type=="management"]{
//       _id,
//       name,
//       "slug":slug.current,
//       "profileImage":profileImage.asset->url,
//       position,
//       linkedIn,
//       twitter,
//       youtube,
//       instagram,
//     }`,
//     {},
//     { next: { tags: ["management"], revalidate: 3600 } },
//   );

export const getAllManagementData = (): getAllManagementData[] =>
  ManagementData;

const ManagementData: getAllManagementData[] = [
  {
    // linkedIn: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
    _id: "09a157e5-c09f-42aa-a10b-01aa099eb2f5",
    name: "Tejodeep Mitra Roy",
    profileImage:
      "https://cdn.sanity.io/images/ewohzuts/production/1457c3a6fd79f02f3b43e11a7ab0456ce478b540-2448x3264.jpg",
    // youtube: "https://www.linkedin.com/in/tejodeep-mitra-roy",
    // instagram: "https://www.linkedin.com/in/tejodeep-mitra-roy",
    slug: "tejodeep-mitra-roy",
    position: "CTO,Co-Founder",
    // twitter: "https://www.linkedin.com/in/tejodeep-mitra-roy",
  },
  {
    _id: "5b8afa8b-d8c2-48f3-97d7-e39765123a97",
    slug: "pritam-majumder",
    profileImage:
      "https://cdn.sanity.io/images/ewohzuts/production/77043fa879adc5688b4a7ab218aea3cc4c207d5e-355x420.png",
    // linkedIn: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
    // twitter: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
    // youtube: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
    name: "Pritam Majumder",
    position: "CEO,Co-Founder",
    // instagram: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
  },
  {
    _id: "bd55f70d-2712-4736-b499-fd80eb11b76d",
    slug: "arijit-dey",
    // linkedIn: "https://www.linkedin.com/in/tejodeep-mitra-roy/",
    // youtube: "https://www.linkedin.com/in/tejodeep-mitra-roy",
    name: "Arijit Dey",
    profileImage:
      "https://cdn.sanity.io/images/ewohzuts/production/757758eb93cecb3375ce1238587be51512c9025c-514x977.png",
    position: "COO,Co-Founder",
    // twitter: "https://www.linkedin.com/in/tejodeep-mitra-roy",
    // instagram: "https://www.linkedin.com/in/tejodeep-mitra-roy",
  },
];
