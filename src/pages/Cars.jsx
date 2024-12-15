import CarCard from "@/components/CarCard";
import CarsBreadCrumb from "@/components/CarsBreadCrumb";
import CarsSideBar from "@/components/CarsSideBar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getCars } from "@/lib/cars";
import { useState } from "react";
import { Link } from "react-router";

const Cars = () => {
  const cars = getCars();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const lasIndex = currentPage * perPage;
  const firstIndex = lasIndex - perPage;
  const datas = cars.slice(firstIndex, lasIndex);
  const page = Math.ceil(cars.length / perPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== page) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleChangeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat bg-black  opacity-100 py-48 rounded-2xl md:mx-20"
        style={{ backgroundImage: `url("/src/assets/hero-bg.jpg")` }}
      >
        <h1 className="text-center font-bold text-8xl text-white">Cars</h1>
        <CarsBreadCrumb />
      </div>
      <div className="container mx-auto">
        <div className="md:flex flex-row gap-6 md:gap-6 lg:gap-24 py-16 space-y-7 md:space-y-0">
          <div className="w-full md:w-1/3">
            <CarsSideBar cars={cars} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full md:w-2/3 gap-5">
            {datas.map((car) => (
              <Card key={car.id}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Link to={`/cars/${car.id}`}>
                    <CarCard car={car} />
                  </Link>
                </CardContent>
              </Card>
            ))}
            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={prevPage} />
                  </PaginationItem>
                  {numbers.map((n, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        onClick={() => handleChangeCurrentPage(n)}
                        isActive
                      >
                        {n}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext onClick={nextPage} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
