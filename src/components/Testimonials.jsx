import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

import SubTitle from "./SubTitle";
import author1 from "/src/assets/author-1.jpg";
import author2 from "/src/assets/author-2.jpg";
import author3 from "/src/assets/author-3.jpg";
import author4 from "/src/assets/author-4.jpg";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      content:
        "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      authorName: "Alis White",
      authorDes: "Project Manager",
      cover: author1,
    },
    {
      id: 2,
      content:
        "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      authorName: "Annette Black",
      authorDes: "Project Manager",
      cover: author2,
    },
    {
      id: 3,
      content:
        "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      authorName: "Leslie Alexander",
      authorDes: "Project Manager",
      cover: author3,
    },
    {
      id: 4,
      content:
        "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      authorName: "Floyd Miles",
      authorDes: "Project Manager",
      cover: author4,
    },
  ];
  return (
    <div className="container mx-auto py-24">
      <SubTitle
        subTitle="Testimonials"
        title="What our customers are saying about us"
      />
      <Carousel className="w-full pt-12 ">
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card>
                  <CardContent className=" space-y-8 p-6">
                    <div className="flex items-center">
                      <Star color="red" /> <Star color="red" />{" "}
                      <Star color="red" /> <Star color="red" />{" "}
                      <Star color="red" />
                    </div>
                    <p className="text-center text-lg italic">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-3 ">
                      <img src={review.cover} className="rounded-full" alt="" />
                      <div>
                        <h1 className="text-2xl font-bold">
                          {review.authorName}
                        </h1>
                        <h4 className="text-lg">{review.authorDes}</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
