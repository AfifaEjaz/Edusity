import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PiListDashesBold, PiListDashes } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header
        className={`w-full flex items-center justify-center transition duration-500 py-3 ${
          isScrolled ? "bg-dark-blue sticky top-0 z-50" : "absolute z-50 "
        }`}
      >
        <div className="flex items-center justify-between w-11/12 xl:w-10/12  mx-auto ">
          <a href="/" className="logo w-48">
            <img
              src="https://greatstack.in/assets/logo-DUdXW4nF.png"
              alt="Company Logo"
              className="h-full w-full object-cover"
            />
          </a>
          <nav className="flex items-center justify-end px-7">
            <ul className="lg:flex gap-10 hidden justify-between w-full text-white">
              <li>
                <NavLink to="/" className="">
                  Homee
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="">
                  Program
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="">
                  Campus
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="">
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="bg-white text-dark-blue px-6 py-3 rounded-full"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className=""
              >
                {isOpen ? (
                  <PiListDashes color="white" size={35}/>
                ) : (
                  <PiListDashesBold color="white" size={35} />
                )}
              </button>
            </div>
          </nav>
          {isOpen && (
            <div style={{zIndex: "-1"}} className="fixed top-0 right-0 bottom-0 pt-20 px-10 w-52 bg-dark-blue text-white lg:hidden">
              <ul className="flex flex-col justify-center gap-5">
                <li>
                  <NavLink to="/" className="">
                    Homee
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    Program
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    Campus
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="">
                    Testimonials
                  </NavLink>
                </li>
                <li className="mt-5">
                  <NavLink
                    to="/about"
                    className="bg-white text-dark-blue px-6 py-3 rounded-full"
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
