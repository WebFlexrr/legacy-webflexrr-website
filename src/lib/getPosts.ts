// import { client } from "@/config/SanityClient";

// export const getAllPosts = async (): Promise<getAllPosts[]> =>
//   await client.fetch(
//     `*[_type=="post"]{
//       _id,
//       socialMedia,
//       socialId,
//       link,
//       "image":image.asset->url,
//     }`,
//     {},
//     { next: { tags: ["post"], revalidate: 3600 } },
//   );

export const getAllPosts = (): getAllPosts[] => PostData;

const PostData: getAllPosts[] = [
  {
    socialId: "WebFlexrr",
    link: "https://www.facebook.com/",
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/264726b342c16618ae962f0df952e9f2fe0b003c-800x685.png",
    _id: "180dc36e-473d-4341-a66e-060ca826b394",
    socialMedia: "instagram",
  },
  {
    _id: "1f18e780-5fc8-45a6-9432-d7757c5a6663",
    socialMedia: "linkedIn",
    socialId: "WebFlexrr",
    link: "https://www.facebook.com/",
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/b54c7b855315164c842e96230f2afda45ed04de0-1640x429.jpg",
  },
  {
    link: "https://www.facebook.com/",
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/9fbd0fda5b3b3a13c708574d89bdc5a1eed45d22-736x736.jpg",
    _id: "6729ca13-35cc-4f0e-95a7-6344a0e515d9",
    socialMedia: "x",
    socialId: "WebFlexrr",
  },
  {
    socialId: "WebFlexrr",
    link: "https://www.facebook.com/",
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/8f3579f3def278d3da08b34f6de842f5cbaa8445-566x566.png",
    _id: "7bca20ab-97e3-4131-93c6-5b13b4b63dd1",
    socialMedia: "youtube",
  },
  {
    socialMedia: "facebook",
    socialId: "WebFlexrr",
    link: "https://www.facebook.com/",
    image:
      "https://cdn.sanity.io/images/ewohzuts/production/5fbbdb7a5e4bb64ce66a01d5fcd8493bcd6260ab-480x350.jpg",
    _id: "986af139-8a49-4bca-b450-5465f64cb6d6",
  },
];
