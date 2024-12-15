import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCars } from "@/lib/cars";
import { Suspense } from "react";
import { Link } from "react-router";
import CarCard from "./CarCard";
import Loading from "./Loading";
import SubTitle from "./SubTitle";
const HomeCarsList = () => {
  const cars = getCars();
  return (
    <div className="container mx-auto py-[150px]">
      <SubTitle
        title="Explore our perfect and extensive fleet"
        subTitle="Our Fleets"
      />

      <Carousel className="w-full pt-10 ">
        <CarouselContent className="">
          <Suspense fallback={<Loading />}>
            {cars.slice(0, 10).map((car) => (
              <CarouselItem
                key={car.id}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="">
                      <Link to={`/cars/${car.id}`}>
                        <CarCard car={car} />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </Suspense>
        </CarouselContent>

        <CarouselPrevious className="mr-10 mt-2" />
        <CarouselNext className="ml-10" />
      </Carousel>
    </div>
  );
};

export default HomeCarsList;
