import { client } from "@/config/SanityClient";

const getAllFeedback = async (): Promise<getAllFeedback[]> =>
  await client.fetch(
    `*[_type=="feedback" ]{
      _id,
      clientName,
      "slug":slug.current,
      clientPosition,
      rating,
      message,
      "image":image.asset->url,
      _type
    }`,
    {},
    { cache: "force-cache", next: { tags: ["feedback"] } },
  );

export default getAllFeedback;
