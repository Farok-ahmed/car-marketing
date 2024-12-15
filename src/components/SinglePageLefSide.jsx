import { Briefcase, Clock, DoorClosed, Fan, Users } from "lucide-react";
import BookForm from "./BookForm";
import { Separator } from "./ui/separator";

const SinglePageLefSide = ({ car }) => {
  return (
    <>
      <div className="  w-full md:w-1/3 h-[550px] bg-[#FFF8F6] shadow-lg rounded-2xl p-8 space-y-8">
        <h1>
          <span className="text-6xl font-bold">${car.pricePerDay}</span>/Per Day
        </h1>

        <Separator />
        <div className="flex justify-between items-center">
          <span className="flex gap-2">
            <DoorClosed />
            <span>Doors</span>
          </span>
          <span>{car.Doors}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2">
            <Users />
            <span>Passengers</span>
          </span>
          <span>{car.Passengers}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2">
            <Clock />
            <span>Age</span>
          </span>
          <span>{car.Age}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2">
            <Briefcase />
            <span>Luggage</span>
          </span>
          <span>{car.Luggage}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="flex gap-2">
            <Fan />
            <span>Air Condition</span>
          </span>
          <span>{car.AirCondition ? "Yes" : "No"}</span>
        </div>
        <Separator />
        <BookForm carId={car.id} />
      </div>
    </>
  );
};

export default SinglePageLefSide;
