import { Separator } from "@radix-ui/react-separator";
import { CircleArrowOutUpRight, DoorClosed, Users } from "lucide-react";
import { Button } from "./ui/button";

const CarCard = ({ car }) => {
  return (
    <div className="space-y-4">
      <img src={car.image} alt="" />
      <span className="bg-gray-300 px-4 py-2 font-bold  rounded-full">
        {car.type}
      </span>
      <h1 className="text-2xl font-bold">{car.name}</h1>
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
      <Separator orientation="horizontal " className="my-4" />
      <div className="flex justify-between items-center">
        <span className="text-lg font-serif">${car.pricePerDay}/per Day</span>
        <Button>
          Book Now
          <CircleArrowOutUpRight />
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
