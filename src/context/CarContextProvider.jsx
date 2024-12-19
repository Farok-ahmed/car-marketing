import { useState } from "react";
import { CarContext } from ".";

const CarContextProvider = ({ children }) => {
  const [carBooks, setCarBooks] = useState([]);
  const id = crypto.randomUUID();
  const addBooks = (newBook) => {
    setCarBooks((prevBook) => [...prevBook, { id, ...newBook }]);
  };
  return (
    <CarContext.Provider value={{ carBooks, addBooks }}>
      {children}
    </CarContext.Provider>
  );
};
export default CarContextProvider;
