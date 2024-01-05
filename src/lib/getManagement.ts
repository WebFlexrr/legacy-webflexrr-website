import { client } from "@/config/SanityClient";

const getAllManagementData = async (): Promise<getAllManagementData[]> =>
  await client.fetch(
    `*[_type=="management"]{
      _id,
      name,
      "slug":slug.current,
      "profileImage":profileImage.asset->url,
      position,
      linkedIn,
      twitter,
      youtube,
      instagram,
    }`,
    {},
    { next: { tags: ["management"], revalidate: 3600 } },
  );

export default getAllManagementData;
