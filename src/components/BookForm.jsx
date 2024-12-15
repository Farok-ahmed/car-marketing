import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CarContext } from "@/context";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { use, useRef } from "react";
import { Textarea } from "./ui/textarea";

const BookForm = ({ carId }) => {
  const formRef = useRef();
  const { addBooks } = use(CarContext);
  const { toast } = useToast();

  const formAction = (formData) => {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const pickUpLocation = formData.get("pickUp");
    const pickOfLocation = formData.get("pickOf");
    const pickUpDate = formData.get("pickUpDate");
    const pickOfDate = formData.get("pickOfDate");
    const message = formData.get("message");

    emailjs
      .sendForm("service_o682mal", "template_mtjkbuf", formRef.current, {
        publicKey: "tI3k0WmhIRNsWL0MA",
      })
      .then(
        () => {
          toast({
            title: "Booking Successfuly!",
          });
        },
        (error) => {
          toast({
            title: "Booking Faield!",
          });
        }
      );

    addBooks({
      fullName,
      email,
      phone,
      pickUpLocation,
      pickOfLocation,
      pickUpDate,
      pickOfDate,
      message,
      carId,
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Book Now</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-16 ">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold">
              Reserve your vehicle today!
            </DialogTitle>
            <DialogDescription className="text-lg py-3">
              Fill out the form below to reserve your vehicle. Complete the
              necessary details to ensure a smooth rental experience.
            </DialogDescription>
          </DialogHeader>
          <form ref={formRef} action={formAction}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-3 gap-5">
                <div className=" ">
                  <Input
                    id="fullName"
                    required
                    name="fullName"
                    placeholder="Full Name"
                    className="col-span-3"
                  />
                </div>
                <div className=" ">
                  <Input
                    id="email"
                    required
                    name="email"
                    placeholder="Email"
                    className="col-span-3"
                  />
                </div>
                <div className=" ">
                  <Input
                    id="phone"
                    required
                    name="phone"
                    placeholder="Phone"
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Select required name="pickUp">
                  <SelectTrigger className="">
                    <SelectValue placeholder="Pick Up Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pick Up Location</SelectLabel>
                      <SelectItem value="apple">abu dhabi</SelectItem>
                      <SelectItem value="banana">alain</SelectItem>
                      <SelectItem value="blueberry">sharjah </SelectItem>
                      <SelectItem value="grapes">luxury car</SelectItem>
                      <SelectItem value="pineapple">electric car</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className=" ">
                  <Input type="date" id="pickUpDate" name="pickUpDate" />
                </div>
                <Select required name="pickOf">
                  <SelectTrigger className="">
                    <SelectValue placeholder="Drop Off Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Drop Off Location</SelectLabel>
                      <SelectItem value="apple">abu dhabi</SelectItem>
                      <SelectItem value="banana">alain</SelectItem>
                      <SelectItem value="blueberry">sharjah </SelectItem>
                      <SelectItem value="grapes">luxury car</SelectItem>
                      <SelectItem value="pineapple">electric car</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className=" ">
                  <Input
                    type="date"
                    required
                    id="pickOfDate"
                    name="pickOfDate"
                  />
                </div>
              </div>
              <Textarea name="message" placeholder="Type your message here." />
            </div>
            <DialogFooter>
              <Button type="submit">Book Now</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookForm;
