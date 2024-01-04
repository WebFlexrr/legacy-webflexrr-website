import Hero from "@/components/Pages/OurTeams/Hero";
import Footer from "@/components/Ui/Footer/Footer";
import MainTitle from "@/components/Ui/MainTitle";

const Teams = (): JSX.Element => {
  return (
    <>
      <MainTitle heading={"Our Team"} />
      <Hero />
      <Footer />
    </>
  );
};

export default Teams;
