import { CardContent } from "@/components/ui/card";
import { BookAudio, Car } from "lucide-react";
import { Button } from "./ui/button";
import about1 from "/src/assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6 items-center py-20 ">
        <div className="flex gap-2">
          <img
            className="rounded-2xl shadow-md w-full md:w-[600px]"
            src={about1}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-red-500 font-semibold">About Us</h1>
          <h1 className="font-bold text-2xl sm:text-6xl">
            Your trusted partner in <br /> reliable car rental
          </h1>
          <p>
            Aqestic Optio Amet A Ququam Saepe Aliquid Voluate Dicta Fuga Dolor
            Saerror Sed <br /> Earum A Magni Soluta Quam Minus Dolor Dolor
          </p>
          <CardContent>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BookAudio size={32} />
              <div className="flex-1 space-y-1">
                <p className="text-2xl py-2 font-medium leading-none">
                  Easy Booking Proces
                </p>
                <p className="text-sm text-muted-foreground ">
                  We Have Optimized The Booking Process So That Our Clients Can{" "}
                  <br />
                  Experience The Easiest And The Safest Service
                </p>
              </div>
            </div>
          </CardContent>
          <CardContent>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <Car size={32} className="" />
              <div className="flex-1 space-y-1">
                <p className="text-2xl py-2 font-medium leading-none">
                  Convenient Pick-Up & Return Process
                </p>
                <p className="text-sm text-muted-foreground">
                  We Have Optimized The Booking Process So That Our Clients Can{" "}
                  <br />
                  Experience The Easiest And The Safest Service
                </p>
              </div>
            </div>
          </CardContent>
          <Button className="rounded-full py-3 w-[100px]">contact us</Button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
