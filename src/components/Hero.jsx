import { Link } from "react-router";
import HerorForm from "./HerorForm";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black opacity-100 py-20"
      style={{ backgroundImage: `url("/src/assets/hero-bg.jpg")` }}
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h5 className="text-2xl font-bold mb-4 text-red-500">
          Welcome To Car Rent
        </h5>
        <h2 className=" text-3xl md:text-8xl font-bold text-white mb-8">
          Looking to save more on <br /> your rental car?
        </h2>
        <p className="text-lg mb-10 text-white">
          Whether you’re planning a weekend getaway, a business trip, or just{" "}
          <br />
          need a reliable ride for the day, we offer a wide range of vehicles to
          suit your needs.
        </p>
        <div className="flex space-x-4 justify-center">
          <Button>
            <Link to="/contact" className="capitalize">
              Book a Rental
            </Link>
          </Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
      <HerorForm />
    </div>
  );
};

export default Hero;
