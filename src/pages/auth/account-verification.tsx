import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router";

const AccountVerification = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountVerified, setIsAccountVerified] = useState(true);
  useEffect(() => {
    setIsAccountVerified(true);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
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
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-4 md:gap-8 items-center font-medium">
              <Link to="/">Features</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Contact Us</Link>
            </div>
          </div>
        </div>
        <section className="px-4 md:px-10 min-h-screen pt-28 md:pt-48">
          {isAccountVerified ? (
            <>
              <div className="flex justify-center">
                <div className="max-w-[50rem] w-full mx-auto flex flex-col gap-6">
                  <div className="flex items-center justify-center rounded-full mx-auto size-16 md:size-24 bg-green-500">
                    <IoMdCheckmark className="text-white text-4xl md:text-5xl" />
                  </div>

                  <div className="flex flex-col gap-8 md:gap-12 md:mt-8">
                    <div>
                      <p className="text-center text-2xl font-extrabold">
                        Email Verified
                      </p>
                      <h3 className="text-center font-medium text-black/70">
                        You're all set to explore FinXpert's powerful insights
                        and tools
                      </h3>
                    </div>

                    <Link
                      to="/survey-insights"
                      className="text-white font-medium text-lg block bg-primary-500 rounded-full px-8 py-4 text-center w-fit mx-auto"
                    >
                      Go To Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center">
                <div className="max-w-[50rem] w-full mx-auto flex flex-col gap-6">
                  <div className="flex items-center justify-center rounded-full mx-auto size-16 md:size-24 bg-red-500">
                    <MdClose className="text-white text-4xl md:text-5xl" />
                  </div>

                  <div className="flex flex-col gap-8 md:gap-12 md:mt-8">
                    <div>
                      <p className="text-center text-2xl font-extrabold">
                        Link invalid
                      </p>
                      <h3 className="text-center font-medium text-black/70">
                        The verification link is invalid. Please request a new
                        verification link to proceed.
                      </h3>
                    </div>

                    <Button className="text-white text-lg bg-primary-500 rounded-full font-medium !py-7 px-8 mx-auto">
                      Resend verification email
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default AccountVerification;
