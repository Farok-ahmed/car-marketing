import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowWorkAccordion = () => {
  const accordions = [
    {
      id: 1,
      title: "Browse And Select",
      description:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
    {
      id: 2,
      title: "Book And Confirm",
      description:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
    {
      id: 3,
      title: "Book And Enjoy",
      description:
        "Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs",
    },
  ];
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {accordions.map((acc) => (
          <AccordionItem key={acc.id} value={acc.id}>
            <AccordionTrigger>
              <h1 className="text-2xl font-bold">{acc.title}</h1>
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              {acc.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HowWorkAccordion;
