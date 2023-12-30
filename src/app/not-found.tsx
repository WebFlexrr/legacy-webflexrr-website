import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Error",
};

const NotFound = (): JSX.Element => {
  return (
    <main className="relative w-full h-full">
      <div
        className="absolute w-full h-full  bg-cover bg-black opacity-10"
        style={{ backgroundImage: "url('/assets/background.jpg')" }}
      />
      <section className="relative w-full h-full px-5 flex justify-center items-center">
        <section className="flex flex-col items-center ">
          <Image
            src={"/assets/404-image.png"}
            width={"750"}
            height={"0"}
            alt={"404 image"}
            priority={true}
            className=""
          />
          <h1>Page Not Found</h1>
          <Link
            href={"/"}
            className="w-fit h-fit py-3 px-7 mt-10 flex items-center gap-3 border border-secondary text-secondary group hover:text-primary hover:border-primary transition ease-in-out duration-500"
          >
            <div className="w-2 h-2 rounded-full bg-primary  group-hover:bg-secondary transition ease-in-out duration-500"></div>
            Back Home
          </Link>
        </section>
      </section>
    </main>
  );
};
export default NotFound;
