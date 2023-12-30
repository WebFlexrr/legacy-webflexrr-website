import { client } from "@/config/SanityClient";

export const getAllServices = async (): Promise<getAllServices[]> =>
  await client.fetch(
    `*[_type=="service"]{
      _id,name,"slug":slug.current,description,"image":image.asset->url,_updatedAt
  }`,
    { tags: ["service"] },
  );

export const findServiceByName = async (
  serviceName: string,
): Promise<findServiceByName> =>
  await client.fetch(
    `*[_type=="service" && slug.current == "${serviceName}"][0]{
      _id,
      procedure[]{
        _key,
        title,
        "image":image.asset->url,
        description,
        step
      },
      _type,
      name,
      "slug":slug.current,
      services[]{
        _type,
        description,
        _key,
        title,
        "image":image.asset->url
      },
      weAreUsing[]{
        "iconImage":iconImage.asset->url,
        iconName,
        _key,
      },
      "image":image.asset->url,
      description,
      _updatedAt
    }`,
    { tags: ["service"] },
  );
