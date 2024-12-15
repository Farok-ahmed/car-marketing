import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import HomeCarsList from "@/components/HomeCarsList";
import HomeService from "@/components/HomeService";
import HowItWork from "@/components/HowItWork";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <HomeService />
      <HomeCarsList />
      <HowItWork />
      <Testimonials />
    </div>
  );
};

export default Home;
