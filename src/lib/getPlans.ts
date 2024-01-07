import { client } from "@/config/SanityClient";

const getAllPlans = async (): Promise<getAllPlans[]> =>
  await client.fetch(
    `*[_type=="plans"]{
  id,
  name,
  plans[]{
    _key,
    name,
    months,
    service[]
  }
}`,
    {},
    { next: { tags: ["plans"], revalidate: 3600 } },
  );

export default getAllPlans;
