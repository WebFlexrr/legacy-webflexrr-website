// import { client } from "@/config/SanityClient";

// export const getAllPlans = async (): Promise<getAllPlans[]> =>
//   await client.fetch(
//     `*[_type=="plans"]{
//   id,
//   name,
//   plans[]{
//     _key,
//     name,
//     months,
//     service[]
//   }
// }`,
//     {},
//     { next: { tags: ["plans"], revalidate: 3600 } },
//   );

export const getAllPlans = (): getAllPlans[] => plans;

const plans: getAllPlans[] = [
  {
    id: 1,
    name: "All-in-One",
    plans: [
      {
        _key: "e4613e4ecc14",
        name: "Starter Pro",
        months: 2,
        service: [
          "Social Media Management: Engage and Convert Your Audience",
          "LinkedIn Optimization: Build Authority and Generate Leads",
          "YouTube Channel Management: Optimize and Promote Your Videos link",
          "Visual Branding: Eye-Catching Graphics and Brand Identity",
          "Video Editing: Professional Editing and Enhancements",
        ],
      },
      {
        _key: "e4613e4ecc14",
        name: "Business Pro",
        months: 3,
        service: [
          "Social Media Management: Engage and Convert Your Audience",
          "LinkedIn Optimization: Build Authority and Generate Leads",
          "YouTube Channel Management: Optimize and Promote Your Videos link",
          "Visual Branding: Eye-Catching Graphics and Brand Identity",
          "Video Editing: Professional Editing and Enhancements",
        ],
      },
      {
        _key: "785913518ca8",
        name: "Super Nova",
        months: 6,
        service: [
          " Advanced Social Media Strategy: Drive Engagement and Conversions",
          "LinkedIn Engagement: Connecting , engaging and Relationship Building",
          "YouTube Channel Growth: Expand Your Audience and Subscribers",
          "Visual Brand Enhancement: Captivating Design Elements",
          "Video Production and Editing: High-Quality Videos for Impact",
          "Content Marketing: Engaging Articles and Blogs",
        ],
      },
    ],
  },
];
