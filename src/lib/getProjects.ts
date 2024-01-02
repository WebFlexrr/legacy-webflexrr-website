import { client } from "@/config/SanityClient";

const getAllProjects = async (): Promise<getAllProjects[]> =>
  await client.fetch(
    `*[_type=="project"]{
  id,
  name,
  "slug":slug.current,
  description,
  category,
  projectOwnership,
  previewSpacing,
  "preview":preview.asset->url,
  projectLink
}`,
    {},
    { cache: "force-cache", next: { tags: ["project"] } },
  );

export default getAllProjects;
