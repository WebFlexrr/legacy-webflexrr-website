import Hero from "@/components/Pages/OurTeams/Hero";
import MainTitle from "@/components/Ui/MainTitle";
import Footer from "@/components/Ui/Footer/Footer";
import Navbar from "@/components/Ui/Navbar/Navbar";

export default function OurTeams(): JSX.Element {
  return (
    <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 bg-background2 scroll-smooth ">
      <Navbar />
      <MainTitle heading={"Our Team"} picture={""} />
      <Hero />
      <Footer />
    </main>
  );
}
