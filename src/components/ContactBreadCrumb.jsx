import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { Link } from "react-router";

const ContactBreadCrumb = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList className="py-4">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link className="text-2xl  text-white hover:text-red-500" to="/">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-2xl  text-white hover:text-red-500">
              Contact Us
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default ContactBreadCrumb;
