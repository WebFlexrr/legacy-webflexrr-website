// import { client } from "@/config/SanityClient";

// export const getAllServices = async (): Promise<getAllServices[]> =>
//   await client.fetch(
//     `*[_type=="service" ]{
//       _id,
//       procedure[]{
//         _key,
//         title,
//         "image":image.asset->url,
//         description,
//         step
//       },
//       _type,
//       name,
//       "slug":slug.current,
//       services[]{
//         _type,
//         description,
//         _key,
//         title,
//         "image":image.asset->url
//       },
//       weAreUsing[]{
//         "iconImage":iconImage.asset->url,
//         iconName,
//         _key,
//       },
//       "image":image.asset->url,
//       description,
//       _updatedAt
//     }`,
//     {},
//     {
//       next: { tags: ["getAllServices"], revalidate: 3600 },
//     },
//   );

export const getAllServices = (): getAllServices[] => serviceArrayData;
//
// export const findServiceByName = async (
//   serviceName: string,
// ): Promise<findServiceByName> =>
//   await client.fetch(
//     `*[_type=="service" && slug.current == "${serviceName}"][0]{
//       _id,
//       procedure[]{
//         _key,
//         title,
//         "image":image.asset->url,
//         description,
//         step
//       },
//       _type,
//       name,
//       "slug":slug.current,
//       services[]{
//         _type,
//         description,
//         _key,
//         title,
//         "image":image.asset->url
//       },
//       weAreUsing[]{
//         "iconImage":iconImage.asset->url,
//         iconName,
//         _key,
//       },
//       "image":image.asset->url,
//       description,
//       _updatedAt
//     }`,
//     {},
//     {
//       next: { tags: ["findServiceByName"], revalidate: 3600 },
//     },
//   );

export const findServiceByName = (serviceName: string): getAllServices => {
  const data = serviceArrayData.filter((item) => item.slug === serviceName);
  return data[0];
};

const serviceArrayData: getAllServices[] = [
  {
    _type: "service",
    name: "Web Developement",
    _updatedAt: "2024-01-01T20:27:34Z",
    description:
      "Web development involves creating and maintaining websites or web applications. It encompasses various tasks, including web design, front-end development for user interfaces, back-end development for server-side logic, and database management. Web developers use programming languages such as HTML, CSS, and JavaScript to build the visual elements and functionality of a site.",
    _id: "2cf12333-490d-48b5-b3fa-bc64bad24111",
    procedure: [
      {
        title: "Client Consultation",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/8f3579f3def278d3da08b34f6de842f5cbaa8445-566x566.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,dw",
        step: 1,
        _key: "29054af39e3e",
      },
      {
        _key: "96142f098034",
        title: "Project Planning",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/8f3579f3def278d3da08b34f6de842f5cbaa8445-566x566.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        step: 2,
      },
      {
        _key: "b73132affc1b",
        title: "Design Mockups",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/8f3579f3def278d3da08b34f6de842f5cbaa8445-566x566.png",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        step: 3,
      },
      {
        _key: "6eed38567f02",
        title: "Development & Testing",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/8f3579f3def278d3da08b34f6de842f5cbaa8445-566x566.png",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        step: 4,
      },
      {
        _key: "5a7faa2a9483",
        title: "Ongoing Support",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/8f3579f3def278d3da08b34f6de842f5cbaa8445-566x566.png",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
        step: 5,
      },
    ],
    slug: "web-developement",
    services: [
      {
        _type: "services",
        description:
          "Elevate your online presence with Webflexrr's React-powered E-commerce solutions. We build dynamic and engaging platforms that redefine the way customers shop and interact.",
        _key: "514609bf71b5",
        title: "Customize Design",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/d5065ef9c9e6b3b4bda4a6e9b64b31ef9303790a-1920x1440.png",
      },
      {
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/16f6147cefd1354ce3a78f843be7c88d71a7a5d2-1920x1440.png",
        _type: "services",
        description:
          "Content made dynamic – Webflexrr brings innovation to your fingertips with React.js integrated CMS platforms, ensuring a fluid and efficient content management experience.",
        _key: "38ab473118d8",
        title: "Responsive Design",
      },
      {
        _type: "services",
        description:
          "Captivate, Convert, Conquer – Webflexrr crafts stunning React-powered landing pages that turn visitors into loyal customers. Elevate your brand with a captivating first impression.\n",
        _key: "634d964bd39a",
        title: "Scalability",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/14dc813cd8154069c89864e95d81afce94dd5fb6-1080x811.png",
      },
      {
        _type: "services",
        description:
          "Webflexrr crafts Progressive Web Apps that redefine user experiences. Fast, reliable, and feature-packed, our PWAs elevate your brand to new heights.",
        _key: "1042bd3a08b4",
        title: "Cross-Browser Compatibility",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/8632ea743348a7246022c0a744267164084ad029-1920x1440.png",
      },
      {
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/fdacf06d30522e71aeed88c2dd37cab87701ab10-512x512.png",
        _type: "services",
        description: "Content Management Systems (CMS) Expertise",
        _key: "6765feafbfd3",
        title: "Content Management Systems (CMS) Expertise",
      },
      {
        _key: "ecb24cafb295",
        title: "E-commerce Integration",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/fdacf06d30522e71aeed88c2dd37cab87701ab10-512x512.png",
        _type: "services",
        description: "E-commerce Integration",
      },
      {
        _type: "services",
        description: "Integration with Third-Party Services",
        _key: "1bf5447835e7",
        title: "Integration with Third-Party Services",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/3908685e176765002a13b9dfbc792d124673fa5e-1920x1440.png",
      },
      {
        _type: "services",
        description: "Compliance with Web Standards",
        _key: "0030998a8c35",
        title: "Compliance with Web Standards",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/3908685e176765002a13b9dfbc792d124673fa5e-1920x1440.png",
      },
    ],
    weAreUsing: [
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/3a413c50999424800fa88da1b4d19517e96ad530-512x512.png",
        iconName: "React",
        _key: "972c81795579",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/851249373de967473ccd6ce6b5c6d5bcf6017e71-512x512.png",
        iconName: "Html",
        _key: "33080125ec51",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/c58692fd020665a8fa2d14af299cc28b88017f3e-512x512.png",
        iconName: "Css",
        _key: "a644d435a408",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/093ea39748ad4561f3b9c1370c90e844f0389a24-512x512.png",
        iconName: "Js",
        _key: "659af46fd928",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/9f22d765d4ba7140aa43b8f36882316d9480a545-512x512.png",
        iconName: "Type Script",
        _key: "c9583f2de4b8",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/c76c99ef1470114cbc3df3c7e336bc350ef1ca06-512x512.png",
        iconName: "Node Js",
        _key: "6e017c2bb328",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/d9f6984572f898694cdfd9269bd3d73ba0c89ff3-512x298.png",
        iconName: "Express Js",
        _key: "08ce3b34a8dd",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/6f0c1d15a4307284c7d2228b2489fc62b2937aa1-1280x720.png",
        iconName: "Mongo DB",
        _key: "810f43553f4a",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/798fabf02295234b5faac039bee99161a9824092-512x512.png",
        iconName: "Postgresql",
        _key: "d369525bf43b",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/ab1a5a01ec93b55bf828119da2cb5a6e83e8d0b6-512x512.png",
        iconName: "Redis",
        _key: "c7b5330fa180",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/cca23a81ca3c2e3d65fe1d0017c4c2dd07e076f6-512x512.png",
        iconName: "AWS",
        _key: "c99ffa932582",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/f7a2a46a0cd638b823d27646f2879876bed9d683-512x512.png",
        iconName: "Lambda",
        _key: "cf959a411f11",
      },
    ],
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/14dc813cd8154069c89864e95d81afce94dd5fb6-1080x811.png",
  },
  {
    name: "App Development",
    services: null,
    weAreUsing: null,
    _updatedAt: "2024-04-17T10:50:08Z",
    _id: "7558ad38-064c-4741-adb9-fc7e1eee2484",
    procedure: null,
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/ed85e7bc62d89b9cae2d02d62096a64993bb43df-1400x1050.png",
    description:
      "Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems. The software can be preinstalled on the device, downloaded from a mobile app store or accessed through a mobile web browser.",
    _type: "service",
    slug: "app-development",
  },
  {
    _type: "service",
    description:
      "Digital marketing is a vital strategy harnessing online channels and technologies to globally promote products or services. Its pervasive internet reach breaks geographical barriers, offering cost-effective alternatives to traditional advertising and precise demographic targeting. Real-time analytics enable quick campaign adjustments, ensuring optimal results. With consumers relying on digital channels, a strong digital marketing presence is essential for brand visibility, customer acquisition, and overall business growth. In essence, it's indispensable for its efficiency, global reach, and adaptability, making it a cornerstone of success in the contemporary landscape.",
    _updatedAt: "2023-12-27T20:03:11Z",
    procedure: null,
    name: "Digital Marketing",
    slug: "digital-marketing",
    services: [
      {
        _type: "services",
        description:
          "Elevate your brand's visibility with WebFlexrr's data-driven SEO strategies that go beyond algorithms.",
        _key: "32347b9c2fdb",
        title: "Strategic SEO Solutions",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/a53a164f1ac9e0a6370bb183e1750da769fa0d60-1920x1440.png",
      },
      {
        _key: "e3956408ba18",
        title: "Blog",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/5092d0af46cd55c7701b2504682c7915e2510139-1920x1440.png",
        _type: "services",
        description:
          "Fuel your brand's narrative with WebFlexrr's captivating blog posts, providing informative and engaging content.",
      },
      {
        _key: "f18723a41640",
        title: "Social Media Management",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/dd7a9a4abafb6e095bf44d096e5ff2b4ee09b951-1920x1440.png",
        _type: "services",
        description:
          "Transform your social presence into a dynamic force with WebFlexrr's expertly crafted campaigns and community engagement.",
      },
      {
        _type: "services",
        description:
          "Turn visitors into customers with meticulous user experience enhancements and optimization for maximum conversions.",
        _key: "d7494be8079e",
        title: "Conversion Rate Optimization ",
        image:
          "https://cdn.sanity.io/images/ewohzuts/production/d06b19b2df96d213fe747b6b9627facec5d46549-1920x1440.png",
      },
    ],
    weAreUsing: [
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/68fc892a8de89565c0cf9d9cddcaf3268436dcc0-512x512.png",
        iconName: "Google Analytics",
        _key: "2723d79dc0f9",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/fdacf06d30522e71aeed88c2dd37cab87701ab10-512x512.png",
        iconName: "Mail Chimp",
        _key: "25b81564c5a8",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/9e465a0ee6764ec58584f0bff8f41ece010f5ad8-512x512.png",
        iconName: "Google ADS",
        _key: "3e0244237d4b",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/810db41cd42dd09f6005794bb9d2ce5e861b77a7-512x512.png",
        iconName: "HubSpot",
        _key: "5c8314a16040",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/549355150a988dd76fe87285453ab7cdba440d7a-512x512.png",
        iconName: "Notion",
        _key: "1277716c1b4f",
      },
      {
        iconImage:
          "https://cdn.sanity.io/images/ewohzuts/production/f9ecc4accd6a64481054fac0ce0bddb57cefdffe-512x512.png",
        iconName: "Sprout Social",
        _key: "ace6caeb0729",
      },
    ],
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/ed576c93b25537a729ec0f343b2bb6cbe86dd33b-1920x1440.png",
    _id: "cf28fe15-128e-4c42-89a9-79519d5bea23",
  },
];
