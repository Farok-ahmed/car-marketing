import HowWorkAccordion from "./HowWorkAccordion";
import HowItWorkImage from "/src/assets/How-it-work.jpg";
const HowItWork = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10  items-center  ">
        <div className="flex flex-col gap-3 space-y-4">
          <h1 className="text-red-500 font-semibold">How It Work</h1>
          <h1 className="font-bold text-3xl md:text-6xl">
            Streamlined processes for <br />a hassle-free experience
          </h1>
          <p>
            Our streamlined process ensures a seamless car rental experience
            from start to <br /> finish. With easy online booking, flexible
            pick-up and drop-off options.
          </p>
          <HowWorkAccordion />
        </div>
        <div className="">
          <img src={HowItWorkImage} className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
