import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const FormBtn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" disabled={pending} className="mt-4">
        Send
      </Button>
    </>
  );
};

export default FormBtn;
