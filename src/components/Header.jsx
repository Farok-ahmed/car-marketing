import { useAuth, useClerk, UserButton } from "@clerk/clerk-react";
import { AlignRight, HomeIcon } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.svg";
import { Button } from "./ui/button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSignIn } = useClerk();

  const router = useNavigate();

  const { isSignedIn } = useAuth();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLink = () => {
    router("/dashboard");
  };

  return (
    <>
      <div className="flex justify-between items-center shadow-sm p-5 container mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="" />
          <span className="text-red-500 text-2xl font-bold">Car Marketing</span>
        </Link>
        <ul className=" hidden md:flex items-center gap-10">
          <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Cars
            </NavLink>
          </li>
          <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-3">
          {isSignedIn ? (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="Dashboard"
                  labelIcon={<HomeIcon size={15} />}
                  onClick={handleLink}
                />
              </UserButton.MenuItems>
            </UserButton>
          ) : (
            <Button onClick={() => openSignIn({})}>Sign In</Button>
          )}
          <button className="md:hidden">
            <AlignRight onClick={handleToggle} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="relative">
          <ul className={`bg-slate-100 py-6 px-7 absolute top-0 left-0 `}>
            <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
              <NavLink
                onClick={handleToggle}
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
              <NavLink
                onClick={handleToggle}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
              <NavLink
                onClick={handleToggle}
                to="/cars"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Cars
              </NavLink>
            </li>
            <li className="hover:text-red-500 active:text-red-500 font-bold text-lg  duration-100">
              <NavLink
                to="/contact"
                onClick={handleToggle}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
