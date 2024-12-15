import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router";
import Social from "./Social";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import logo from "/src/assets/logo.svg";

const Footer = () => {
  const { toast } = useToast();
  const formAction = (formData) => {
    toast({
      title: "Successfuly Submited!",
    });
  };
  return (
    <section className="md:mx-10 px-10 pt-16 pb-4 rounded-2xl bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 space-y-4 sm:gap-10 ">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="" />
              <span className="text-white text-2xl font-bold">
                Car Marketing
              </span>
            </Link>
            <p className="text-white text-lg py-5">
              Experience the ease and <br /> convenience of renting a car with{" "}
              <br /> Novaride.
            </p>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold capitalize">
              legal policy
            </h1>
            <ul className="space-y-2 mt-3">
              <li className="text-white font-serif text-lg hover:text-red-500">
                Term & Condition
              </li>
              <li className="text-white font-serif text-lg hover:text-red-500">
                Privacy Policy
              </li>
              <li className="text-white font-serif text-lg hover:text-red-500">
                Legal Notice
              </li>
              <li className="text-white font-serif text-lg hover:text-red-500">
                Accessibility
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold capitalize ">
              quick links
            </h1>
            <ul className="space-y-2 mt-3">
              <li className="text-white font-serif text-lg hover:text-red-500">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-serif text-lg hover:text-red-500">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white font-serif text-lg hover:text-red-500">
                <Link to="/cars">Cars</Link>
              </li>
              <li className="text-white font-serif text-lg hover:text-red-500">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white text-2xl  font-bold capitalize pb-3">
              Subscribe to the Newsleeters
            </h1>
            <form action={formAction} className="flex items-center ">
              <Input
                className="rounded-full py-6"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <Button type="submit" className="py-6 rounded-full">
                Subscrib
              </Button>
            </form>
          </div>
        </div>
        <div className="pt-6">
          <Separator />
          <div className="sm:flex space-y-4 justify-between items-center  mt-3">
            <p className="text-white text-xl">
              © 2024 Md Farok Ahmed. All rights reserved.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
