import { Mail, Map, Phone } from "lucide-react";
import { Link } from "react-router";
import Social from "./Social";

const ContactPageLeftSide = () => {
  return (
    <div className=" w-full md:w-2/4   bg-black p-12 rounded-2xl shadow-xl ">
      <div className="pb-20">
        <h1 className="text-white font-bold text-4xl">Contact information</h1>
        <p className="text-white font-semibold text-lg py-4">
          Say something to start a live chat!
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-col pb-20 ">
        <div className="flex items-center gap-4">
          <Phone color="white" size={32} />
          <Link to="tel:01908313996" className="text-xl  text-white">
            +8801908313996
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Mail color="white" size={32} />
          <Link
            to="mailto:mdfarokahmed2002@gmail.com"
            className="text-md md:text-xl  text-white"
          >
            mdfarokahmed2002@gmail.com
          </Link>
        </div>
        <div className="flex  gap-4">
          <Map color="white" size={32} />
          <p className="text-xl  text-white">
            Aharanda, Brahmanbaria, Bangladesh
          </p>
        </div>
      </div>
      <Social />
    </div>
  );
};

export default ContactPageLeftSide;
