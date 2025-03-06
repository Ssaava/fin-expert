import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-auto py-6 md:py-6 px-6 sm:px-10 md:px-20 lg:px-28">
      <div className="flex gap-4 flex-wrap justify-between items-start">
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-2xl">FinExpert</h1>
          <p className="text-black/50 font-medium">
            Empowering fintechs with inclusivity insights
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-black/50 font-medium">
              Home
            </Link>
            <Link to="/" className="text-black/50 font-medium">
              Benefits
            </Link>
            <Link to="/" className="text-black/50 font-medium">
              Testimonials
            </Link>
          </div>
        </div>
        {/* links */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg">Company</h1>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-black/50 font-medium">
              Contact
            </Link>
            <Link to="/" className="text-black/50 font-medium">
              Community
            </Link>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg">Company</h1>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-black/50 font-medium">
              Privacy Policy
            </Link>
            <Link to="/" className="text-black/50 font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg text-black/50">
            &copy; {currentYear}
          </h1>
          <div className="flex gap-4 items-center">
            <Link to={"/"}>
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link to={"/"}>
              <FaInstagram className="text-2xl" />
            </Link>
            <Link to={"/"}>
              <FaXTwitter className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
