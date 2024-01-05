import { client } from "@/config/SanityClient";

export const getAllPosts = async (): Promise<getAllPosts[]> =>
  await client.fetch(
    `*[_type=="post"]{
      _id,
      socialMedia,
      socialId,
      link,
      "image":image.asset->url,
    }`,
    {},
    { next: { tags: ["post"], revalidate: 3600 } },
  );

export default getAllPosts;
