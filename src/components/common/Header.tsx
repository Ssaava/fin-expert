import { Link } from "react-router";
import { Button } from "../ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 px-6 sm:px-10 md:px-20 lg:px-28 py-4 sm:py-6 border-b border-gray-300 bg-white z-50">
      <div className="flex items-center gap-4 justify-between">
        <div>
          <h1 className="font-extrabold text-2xl">FinExpert</h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden absolute top-full left-0 right-0 flex-col bg-white border-b border-gray-300 p-4`}
        >
          <Link to="/" className="py-2">
            Features
          </Link>
          <Link to="/" className="py-2">
            Testimonials
          </Link>
          <Link to="/" className="py-2">
            Contact Us
          </Link>
          <Button className="rounded-full bg-primary-500 p-6 w-full my-2">
            Create Account
          </Button>
          <Button className="rounded-full bg-gray-200 text-gray-900 hover:text-white p-6 w-full my-2">
            Login
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 md:gap-8 items-center font-medium">
          <Link to="/">Features</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <Button className="cursor-pointer rounded-full bg-primary-500 p-6">
            Create Account
          </Button>
          <Button className="cursor-pointer rounded-full bg-gray-200 text-gray-900 hover:text-white p-6">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
