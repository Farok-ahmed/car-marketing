import CarBreadcrumb from "@/components/CarBreadcrumb";
import HowWorkAccordion from "@/components/HowWorkAccordion";
import Loading from "@/components/Loading";
import SinglePageLefSide from "@/components/SinglePageLefSide";
import { getCarById } from "@/lib/cars";
import { CircleCheckBig } from "lucide-react";
import { Suspense } from "react";
import { useParams } from "react-router";

const CarDetails = () => {
  const { id } = useParams();
  const car = getCarById(parseInt(id));

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat bg-black  opacity-100 py-20 rounded-2xl mx-20"
        style={{ backgroundImage: `url(${car.image})` }}
      >
        <h1 className="text-center font-extrabold text-4xl text-white">
          {car.name}
        </h1>
        <CarBreadcrumb title={car.name} />
      </div>
      <div className="container mx-auto py-20">
        <Suspense fallback={<Loading />}>
          <div className=" flex flex-col md:flex-row gap-16">
            <SinglePageLefSide car={car} />
            <div className=" w-full md:w-2/3 space-y-6">
              <img className="border rounded-2xl" src={car.image} alt="" />
              <p className="text-lg mt-6">{car.description}</p>
              <h1 className=" text-2xl md:text-4xl font-bold py-4">
                Premium amenities and features
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {car.features.map((item) => (
                  <p className="flex gap-2" key={item}>
                    <CircleCheckBig />
                    <span className="text-lg font-bold">{item}</span>
                  </p>
                ))}
              </div>
              <h1 className=" text-2xl md:text-4xl font-bold py-4">
                Policies and agreement
              </h1>
              <HowWorkAccordion />
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
};

export default CarDetails;
