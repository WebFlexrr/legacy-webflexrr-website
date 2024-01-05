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
    { next: { tags: ["project"], revalidate: 3600 } },
  );

export default getAllProjects;
