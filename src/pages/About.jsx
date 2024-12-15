import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";

const About = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat bg-black  opacity-100 py-24 rounded-2xl  md:mx-20"
        style={{ backgroundImage: `url("/src/assets/hero-bg.jpg")` }}
      >
        <h1 className="text-center font-bold text-2xl sm:text-8xl text-white">
          {" "}
          About Us
        </h1>
      </div>
      <AboutUs />
      <Testimonials />
    </div>
  );
};

export default About;
