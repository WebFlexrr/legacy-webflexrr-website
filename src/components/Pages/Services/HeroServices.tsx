import ServiceItems from "@/components/Ui/Services/ServiceItems";
import { getAllServices } from "@/lib/getServices";

const HeroServices = async (): Promise<JSX.Element> => {
  const services = await getAllServices();
  return (
    <section className="w-full h-auto ">
      <section className="border border-black w-full h-auto py-20 px-8 md:px-5 xl:pb-36 xl:pt-0">
        <section className="border border-black w-full max-w-[100rem] mx-auto h-auto flex flex-col gap-10">
          <section className=" w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14  md:gap-x-20 lg:gap-14 xl:gap-x-126  ">
            {services.map((items) => (
              <ServiceItems
                key={items._id}
                title={items.name}
                image={items.image}
                slug={items.slug}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default HeroServices;