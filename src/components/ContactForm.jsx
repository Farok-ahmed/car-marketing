import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="Submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};
const ContactForm = () => {
  const { toast } = useToast();
  const formAction = (formData) => {
    toast({
      title: "Successfuly Submited!",
    });
  };
  return (
    <div className=" w-full md:w-2/4">
      <form action={formAction}>
        <div className="grid grid-cols-2 gap-6">
          <div className=" grid gap-2   ">
            <Label className="text-lg pb-4" htmlFor="firstName">
              First Name
            </Label>
            <Input
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="  grid gap-2  ">
            <Label className="text-lg pb-4" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name"
            />
          </div>
          <div className="  grid gap-2  ">
            <Label className="text-lg " htmlFor="email">
              Email
            </Label>
            <Input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className=" grid gap-2  ">
            <Label className="text-lg " htmlFor="phone">
              Phone
            </Label>
            <Input
              required
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Your Phone"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-2 mb-3">
          <Label className="text-lg pb-4" htmlFor="phone">
            Message
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Type your message here."
          />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default ContactForm;
