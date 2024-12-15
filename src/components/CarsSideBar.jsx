import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "./ui/input";

const CarsSideBar = ({ cars }) => {
  return (
    <div className="  bg-[#FFF8F6] shadow-lg rounded-2xl p-8 ">
      <div className="flex flex-col gap-1">
        <Input type="text" className="my-2" placeholder="Search...." />
        <h1 className="text-2xl font-bold py-3">Car Types</h1>
        {cars.map((car) => (
          <div key={car.id} className="flex items-center space-x-2">
            <Checkbox id={car.id} />
            <label
              htmlFor={car.id}
              className="text-xl py-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {car.type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsSideBar;
