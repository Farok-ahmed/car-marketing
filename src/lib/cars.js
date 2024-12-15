import breeze from "/src/assets/Breeze-Compact.png";
import cobra from "/src/assets/Cobra-Classic.png";
import desert from "/src/assets/Desert-Storm.png";
import eclipse from "/src/assets/Eclipse-Sedan.png";
import falcon from "/src/assets/Falcon-X-Cruiser.png";
import gladiator from "/src/assets/Gladiator-LX.png";
import harrier from "/src/assets/Harrier-Wagon.png";
import meteor from "/src/assets/Meteor-GT.png";
import nova from "/src/assets/Nova-Glide.png";
import phantom from "/src/assets/Phantom-Drive.png";
import pioneer from "/src/assets/Pioneer-Compact.png";
import sapphire from "/src/assets/Sapphire-Convertible.png";
import skyline from "/src/assets/Skyline-Elite.png";
import turboMax from "/src/assets/TurboMax-Speedster.png";
import voyager from "/src/assets/Voyager-GT.png";
const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    type: "Sedan",
    image: breeze,
    description:
      "The Toyota Camry is a reliable and fuel-efficient sedan known for its comfort and spacious interior. It offers a smooth ride and comes equipped with modern features like advanced safety systems and a user-friendly infotainment system. Ideal for both city driving and long road trips.",
    features: ["Air Conditioning", "Power Windows", "Bluetooth Connectivity"],
    Doors: 4,
    Passengers: 5,
    Age: 2020,
    Luggage: 2,
    AirCondition: true,
    pricePerDay: 50.0,
  },
  {
    id: 2,
    name: "Ford F-150",
    type: "Truck",
    image: cobra,
    description:
      "The Ford F-150 is a powerful and capable truck designed for work and play. It boasts impressive towing and hauling capabilities, making it ideal for transporting cargo or towing trailers. With its durable construction and advanced features, the F-150 is a reliable choice for those who need a strong and versatile vehicle.",
    features: ["4x4 Capability", "Towing Package", "Bed Liner"],
    Doors: 4,
    Passengers: 5,
    Age: 2022,
    Luggage: 4,
    AirCondition: true,
    pricePerDay: 80.0,
  },
  {
    id: 3,
    name: "Honda Civic",
    type: "Compact",
    image: desert,
    description:
      "The Honda Civic is a popular choice for its fuel efficiency, reliability, and practicality. It offers a comfortable and spacious interior, making it suitable for daily commutes and weekend getaways. Known for its advanced safety features and smooth handling, the Civic is a well-rounded and enjoyable car to drive.",
    features: [
      "Excellent Fuel Economy",
      "Spacious Interior",
      "Advanced Safety Features",
    ],
    Doors: 4,
    Passengers: 5,
    Age: 2021,
    Luggage: 2,
    AirCondition: true,
    pricePerDay: 40.0,
  },
  {
    id: 4,
    name: "Jeep Wrangler",
    type: "SUV",
    image: eclipse,
    description:
      "The Jeep Wrangler is an iconic SUV known for its off-road capabilities and rugged style. With its removable doors and roof, the Wrangler offers an open-air driving experience. It's perfect for outdoor adventures, whether you're exploring trails or simply enjoying the summer breeze. Features like 4x4 capability and a spacious cargo area make it versatile for any occasion.",
    features: ["Removable Roof", "4x4 Capability", "Spacious Cargo Area"],
    Doors: 4,
    Passengers: 5,
    Age: 2019,
    Luggage: 3,
    AirCondition: true,
    pricePerDay: 70.0,
  },
  {
    id: 5,
    name: "Tesla Model 3",
    type: "Electric",
    image: falcon,
    description:
      "The Tesla Model 3 is a high-performance electric vehicle known for its sleek design, advanced technology, and impressive range. It offers a smooth and quiet ride, along with features like autopilot and a large touchscreen display. Experience the future of driving with the Tesla Model 3.",
    features: ["Autopilot", "Large Touchscreen", "Long Range"],
    Doors: 4,
    Passengers: 5,
    Age: 2023,
    Luggage: 2,
    AirCondition: true,
    pricePerDay: 100.0,
  },
  {
    id: 6,
    name: "BMW 3 Series",
    type: "Luxury Sedan",
    image: gladiator,
    description:
      "The BMW 3 Series is a luxury sedan renowned for its sporty handling, powerful engines, and sophisticated interior. It offers a blend of performance and comfort, making it an ideal choice for those who appreciate a refined driving experience. Enjoy the thrill of the open road with the BMW 3 Series.",
    features: [
      "Sporty Handling",
      "Luxurious Interior",
      "Advanced Safety Features",
    ],
    Doors: 4,
    Passengers: 5,
    Age: 2021,
    Luggage: 2,
    AirCondition: true,
    pricePerDay: 85.0,
  },
  {
    id: 7,
    name: "Ford Mustang",
    type: "Sports Car",
    image: harrier,
    description:
      "The Ford Mustang is an iconic American sports car known for its powerful engines, stylish design, and thrilling performance. Whether you're cruising down the highway or taking on winding roads, the Mustang delivers an exhilarating driving experience. Unleash your inner speed demon with the legendary Mustang.",
    features: ["Powerful Engine", "Sporty Handling", "Stylish Design"],
    Doors: 2,
    Passengers: 4,
    Age: 2022,
    Luggage: 1,
    AirCondition: true,
    pricePerDay: 75.0,
  },
  {
    id: 8,
    name: "Honda CR-V",
    type: "SUV",
    image: meteor,
    description:
      "The Honda CR-V is a popular and versatile SUV known for its fuel efficiency, reliability, and spacious interior. It offers ample cargo space, making it ideal for family trips and weekend adventures. With its comfortable ride and advanced safety features, the CR-V provides a safe and enjoyable driving experience for everyone.",
    features: [
      "Spacious Interior",
      "Fuel Efficient",
      "Advanced Safety Features",
    ],
    Doors: 4,
    Passengers: 5,
    Age: 2020,
    Luggage: 3,
    AirCondition: true,
    pricePerDay: 55.0,
  },
  {
    id: 9,
    name: "Chevrolet Silverado",
    type: "Truck",
    image: nova,
    description:
      "The Chevrolet Silverado is a robust and powerful truck capable of handling the toughest jobs. It offers a wide range of configurations to suit various needs, from work trucks to off-road adventurers. With its strong towing capacity and durable construction, the Silverado is a reliable and capable partner for any task.",
    features: ["Powerful Engine", "Towing Capability", "Durable Construction"],
    Doors: 4,
    Passengers: 5,
    Age: 2023,
    Luggage: 4,
    AirCondition: true,
    pricePerDay: 90.0,
  },
  {
    id: 10,
    name: "Hyundai Sonata",
    type: "Sedan",
    image: phantom,
    description:
      "The Hyundai Sonata is a stylish and well-equipped sedan that offers a comfortable and refined driving experience. It boasts a spacious interior, advanced technology features, and a smooth and quiet ride. With its impressive fuel efficiency and competitive pricing, the Sonata is a strong contender in the midsize sedan segment.",
    features: ["Stylish Design", "Spacious Interior", "Fuel Efficient"],
    Doors: 4,
    Passengers: 5,
    Age: 2021,
    Luggage: 2,
    AirCondition: true,
    pricePerDay: 45.0,
  },
  {
    id: 11,
    name: "Dodge Challenger",
    type: "Muscle Car",
    image: pioneer,
    description:
      "The Dodge Challenger is a classic American muscle car that delivers thrilling performance and a retro-inspired design. It boasts powerful engines, a muscular stance, and a luxurious interior. Experience the adrenaline rush of driving a true American icon with the Dodge Challenger.",
    features: ["Powerful Engine", "Retro Design", "Luxurious Interior"],
    Doors: 2,
    Passengers: 4,
    Age: 2022,
    Luggage: 1,
    AirCondition: true,
    pricePerDay: 80.0,
  },
  {
    id: 12,
    name: "Mazda MX-5 Miata",
    type: "Sports Car",
    image: sapphire,
    description:
      "The Mazda MX-5 Miata is a legendary roadster known for its lightweight design, agile handling, and engaging driving experience. It offers a pure and exhilarating driving experience with its nimble handling and responsive engine. Top down, wind in your hair, the Miata provides a true sense of freedom on the open road.",
    features: ["Lightweight Design", "Agile Handling", "Convertible Top"],
    Doors: 2,
    Passengers: 2,
    Age: 2021,
    Luggage: 1,
    AirCondition: true,
    pricePerDay: 60.0,
  },
  {
    id: 13,
    name: "Nissan Leaf",
    type: "Electric",
    image: skyline,
    description:
      "The Nissan Leaf is a popular electric car known for its affordability and practicality. It offers a decent range and a comfortable interior, making it a suitable choice for daily commuting and short trips. Experience the benefits of electric driving with the Nissan Leaf.",
    features: ["Electric Motor", "Regenerative Braking", "Quiet Ride"],
    Doors: 4,
    Passengers: 5,
    Age: 2020,
    Luggage: 2,
    AirCondition: true,
    pricePerDay: 45.0,
  },
  {
    id: 14,
    name: "Volvo XC90",
    type: "SUV",
    image: turboMax,
    description:
      "The Volvo XC90 is a luxury SUV renowned for its safety features, luxurious interior, and powerful performance. It offers a comfortable and spacious cabin, making it ideal for families and those who prioritize safety and comfort. Experience the Swedish luxury with the Volvo XC90.",
    features: [
      "Advanced Safety Features",
      "Luxurious Interior",
      "Spacious Cabin",
    ],
    Doors: 4,
    Passengers: 7,
    Age: 2022,
    Luggage: 4,
    AirCondition: true,
    pricePerDay: 120.0,
  },
  {
    id: 15,
    name: "Porsche 911",
    type: "Sports Car",
    image: voyager,
    description:
      "The Porsche 911 is an iconic sports car known for its legendary performance, timeless design, and exhilarating driving experience. It delivers breathtaking acceleration, precise handling, and a luxurious interior. Experience the thrill of driving a true legend with the Porsche 911.",
    features: [
      "High-Performance Engine",
      "Timeless Design",
      "Luxurious Interior",
    ],
    Doors: 2,
    Passengers: 2,
    Age: 2023,
    Luggage: 1,
    AirCondition: true,
    pricePerDay: 150.0,
  },
];

const getCars = () => {
  return cars.map(
    ({ id, name, pricePerDay, Doors, Passengers, type, image }) => ({
      id,
      name,
      pricePerDay,
      Doors,
      Passengers,
      type,
      image,
    })
  );
};

const getCarById = (id) => {
  const car = cars.find((car) => car.id === id);
  return car;
};
export { getCarById, getCars };
