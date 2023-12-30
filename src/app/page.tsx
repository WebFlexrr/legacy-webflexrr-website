import Footer from "@/components/Ui/Footer/Footer";
import Gallery from "@/components/Pages/Home/Gallery";
import Hero from "@/components/Pages/Home/Hero";
import Banner from "@/components/Pages/Home/Banner";
import Services from "@/components/Pages/Home/Services";
import TagLine from "@/components/Pages/Home/TagLine";
import Navbar from "@/components/Ui/Navbar/Navbar";
import OurTeams from "@/components/Pages/Home/OurTeams";
import ContactUs from "@/components/Pages/Home/ContactUs";
import SocialCarousel from "@/components/Ui/SocialPostsCorossal.tsx/SocialCarousel";

const Home = (): JSX.Element => {
  return (
    <main className="main relative w-full h-screen overflow-y-auto overflow-x-hidden z-30 scroll-smooth ">
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <Gallery />
      <TagLine />
      <OurTeams />
      <ContactUs />
      {/* <FeedBack /> */}
      <SocialCarousel />
      <Footer />
    </main>
  );
};

export default Home;
