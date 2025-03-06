import { Link } from "react-router";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 px-6 sm:px-10 md:px-20 lg:px-28 py-4 sm:py-6 border-b border-gray-300 bg-white">
      <div className="flex items-center gap-4 justify-between">
        <div>
          <h1 className="font-extrabold text-2xl">FinExpert</h1>
        </div>
        <div className="flex gap-4 md:gap-8 items-center font-medium">
          <Link to="/">Features</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/">Contact Us</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="rounded-full bg-primary-500 p-6">
            Create Account
          </Button>
          <Button className="rounded-full bg-gray-200 text-gray-900 hover:text-white p-6">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
