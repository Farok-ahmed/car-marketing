import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Social = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Facebook className="border rounded-full p-2" size={48} color="white" />
        <Youtube className="border rounded-full p-2" size={48} color="white" />
        <Twitter className="border rounded-full p-2" size={48} color="white" />
        <Instagram
          className="border rounded-full p-2"
          size={48}
          color="white"
        />
      </div>
    </div>
  );
};

export default Social;
