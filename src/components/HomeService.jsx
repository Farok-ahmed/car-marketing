import { CarFront, CarTaxiFront, PlaneLanding, User } from "lucide-react";
import SubTitle from "./SubTitle";
import { CardContent } from "./ui/card";

const HomeService = () => {
  const servicesData = [
    {
      id: 1,
      icon: <CarFront size={64} />,
      title: "Car Rental With Driver",
      description: "Enhance your rental experience with additional options.",
    },
    {
      id: 2,
      icon: <CarTaxiFront size={64} />,
      title: "Business Car Rental",
      description: "Enhance your rental experience with additional options.",
    },
    {
      id: 3,
      icon: <PlaneLanding size={64} />,
      title: "Airport Transfer",
      description: "Enhance your rental experience with additional options.",
    },
    {
      id: 4,
      icon: <User size={64} />,
      title: "Chauffeur Services",
      description: "Enhance your rental experience with additional options.",
    },
  ];
  return (
    <div className="bg-[#FFF8F6] sm:mx-10 rounded-md shadow-md py-14 ">
      <div className="container mx-auto">
        <SubTitle
          subTitle="Our Services"
          title="Explore our wide range of rental services"
        />
        <CardContent className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 pt-20 pb-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className=" md:p-6 p-4 lg:p-12 shadow-md space-x-4 space-y-3 rounded-md border  "
            >
              <span className="">{service.icon}</span>
              <div className="flex-1 space-y-2">
                <p className=" font-medium leading-none text-xl">
                  {service.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </div>
    </div>
  );
};

export default HomeService;
