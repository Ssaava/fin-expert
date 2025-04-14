import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/store";
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router";

const InsightsHeader = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logOut = useAuthStore((state) => state.logoutUser);
  const user_category = useAuthStore((state) => state.user_category);

  const handleSignOut = async () => {
    await logOut();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
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
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } md:hidden absolute top-full left-0 right-0 flex flex-col bg-white border-b border-gray-300 overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="p-4">
            <button className="mb-4">
              {/* <Avatar className="size-10">
                <AvatarImage src={"https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              {user_category}
            </button>
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`hover:text-primary-500 duration-300 hover:bg-primary-100 px-6 py-3 w-full block rounded-lg ${
                isActivePath("/") ? "font-extrabold bg-primary-100" : ""
              }`}
            >
              Home
            </Link>
            {user_category !== "fintech_users" && (
              <Link
                to="/dashboard"
                onClick={handleLinkClick}
                className={`hover:text-primary-500 duration-300 hover:bg-primary-100 px-6 py-3 w-full block rounded-lg ${
                  isActivePath("/dashboard")
                    ? "font-extrabold bg-primary-100"
                    : ""
                }`}
              >
                Dashboard
              </Link>
            )}
            <Link
              to="/dashboard/survey-insights"
              onClick={handleLinkClick}
              className={`hover:text-primary-500 duration-300 hover:bg-primary-100 px-6 py-3 w-full block rounded-lg ${
                isActivePath("/dashboard/survey-insights")
                  ? "font-extrabold bg-primary-100"
                  : ""
              }`}
            >
              Survey
            </Link>
            <Link
              to="/dashboard/help-support"
              onClick={handleLinkClick}
              className={`hover:text-primary-500 duration-300 hover:bg-primary-100 px-6 py-3 w-full block rounded-lg ${
                isActivePath("/dashboard/help-support")
                  ? "font-extrabold bg-primary-100"
                  : ""
              }`}
            >
              Help & Support
            </Link>

            <form className="flex flex-col gap-2 mt-4">
              <input
                type="search"
                name="search"
                placeholder="search anything"
                id="search"
                className="w-full py-3 px-6 border rounded-lg"
              />
            </form>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 md:gap-8 items-center font-medium">
          <Link to="/" className={isActivePath("/") ? "font-extrabold" : ""}>
            Home
          </Link>
          {user_category != "fintech_users" && (
            <Link
              to="/dashboard"
              className={isActivePath("/dashboard") ? "font-extrabold" : ""}
            >
              Dashboard
            </Link>
          )}
          <Link
            to="/dashboard/survey-insights"
            className={
              isActivePath("/dashboard/survey-insights") ? "font-extrabold" : ""
            }
          >
            Survey
          </Link>
          <Link
            to="/dashboard/help-support"
            className={
              isActivePath("/dashboard/help-support") ? "font-extrabold" : ""
            }
          >
            Help & Support
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <button>
            <IoSearchOutline className="text-2xl" />
          </button>
          <Link to="/survey-insights/settings">
            <CiSettings className="text-2xl" />
          </Link>

          <Popover>
            <PopoverTrigger>
              {/* <Avatar className="size-10">
                <AvatarImage src={"https://github.com/shadcn.png"} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> */}
              {user_category}
            </PopoverTrigger>
            <PopoverContent className="md:mr-20 mt-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-black/40 font-bold">johndoe@gmail.com</p>
                </div>
                <Link
                  to="/dashboard/settings"
                  reloadDocument
                  className="text-primary-500 font-bold rounded-full py-1 px-5 border-2"
                >
                  User
                </Link>
              </div>
              <Separator className="mt-8" />
              <form onSubmit={handleSignOut} className="mt-4">
                <button className="flex gap-2 items-center">
                  <LiaSignOutAltSolid className="text-2xl text-red-500" /> Sign
                  Out
                </button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default InsightsHeader;
