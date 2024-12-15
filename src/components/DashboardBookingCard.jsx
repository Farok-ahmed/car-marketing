import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CarContext } from "@/context";
import { getCarById } from "@/lib/cars";
import { use } from "react";
const DashboardBookingCard = () => {
  const { carBooks } = use(CarContext);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Car Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-center">Car Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carBooks.map((car, index) => {
            const carData = getCarById(car.carId);

            return (
              <TableRow key={car.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{car?.fullName}</TableCell>
                <TableCell>{carData.name}</TableCell>
                <TableCell className="">${carData?.pricePerDay}</TableCell>
                <TableCell className="flex items-center justify-center">
                  <img className="w-24  " src={carData?.image} alt="" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardBookingCard;
