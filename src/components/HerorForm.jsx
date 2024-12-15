import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import FormBtn from "./FormBtn";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

const HerorForm = () => {
  const formRef = useRef();
  const { toast } = useToast();

  const formAction = (formData) => {
    emailjs
      .sendForm("service_o682mal", "template_yrs1tlc", formRef.current, {
        publicKey: "tI3k0WmhIRNsWL0MA",
      })
      .then(
        () => {
          toast({
            title: "DATA SUCCESSFULLY SUBMITED!",
          });
        },
        (error) => {
          toast({
            title: "DATA SUBMITED FAILED...!",
          });
        }
      );
  };

  return (
    <div className=" md:flex flex-row gap-2 bg-white w-full xl:w-[1200px] rounded-md mx-auto p-10">
      <div className="w-full md:w-[200px]">
        <h1 className="text-2xl font-bold">Need to Rent a Luxury Car ?</h1>
      </div>
      <form
        action={formAction}
        ref={formRef}
        className=" flex flex-col md:flex-row items-center justify-center gap-2"
      >
        <Separator orientation="vertical" />
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            className=""
            required
            id="fullName"
            name="fullName"
            placeholder="Enter Full Name"
          />
        </div>
        <Separator orientation="vertical" />
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            required
            name="email"
            className=""
            placeholder="Email"
          />
        </div>
        <Separator orientation="vertical" />
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label htmlFor="location">Pickup Location </Label>
          <Input
            className=" "
            type="text"
            id="location"
            required
            name="location"
            placeholder="Pickup Location"
          />
        </div>
        <Separator orientation="vertical" />
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label htmlFor="location">Pickup Date </Label>
          <Input
            className=" "
            type="date"
            id="date"
            name="date"
            required
            placeholder="Pickup date"
          />
        </div>
        <Separator orientation="vertical" />
        <FormBtn />
      </form>
    </div>
  );
};

export default HerorForm;
