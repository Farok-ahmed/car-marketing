import { Input } from "./ui/input";

const CarsSideBar = ({
  searchQuery,
  setSearchQuery,
  selectedCategories,
  handleChange,
  carTypes, // Here you could pass only car types to simplify the data passed to the component
}) => {
  return (
    <div className="bg-[#FFF8F6] shadow-lg rounded-2xl p-8">
      <div className="flex flex-col gap-1">
        {/* Search Input */}
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="my-2"
          placeholder="Search...."
        />

        {/* Car Types */}
        <h1 className="text-2xl font-bold py-3">Car Types</h1>
        {carTypes.map((type) => (
          <div key={type} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(type)}
              onChange={() => handleChange(type)}
              id={type} // The checkbox id will now be the type, which is unique
            />
            <label
              htmlFor={type} // Associate the label with the checkbox via type
              className="text-xl py-2 font-medium"
            >
              {type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsSideBar;
