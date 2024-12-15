import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";

const CarBreadcrumb = ({ title }) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="py-4">
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link className="text-2xl  text-white hover:text-red-500" to="/">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link
                className="text-2xl  text-white hover:text-red-500"
                to="/cars"
              >
                Cars
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-2xl  text-white hover:text-red-500">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default CarBreadcrumb;
