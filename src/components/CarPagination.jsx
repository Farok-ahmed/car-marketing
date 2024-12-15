import { useState } from "react";

const CarPagination = ({ cars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const lasIndex = currentPage * perPage;
  const firstIndex = lasIndex - perPage;
  const datas = cars.slice(firstIndex, lasIndex);
  const page = Math.ceil(cars.length / perPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  const prevPage = () => {};
  const nextPage = () => {};
  const handleChangeCurrentPage = () => {};
  return <div></div>;
};

export default CarPagination;
