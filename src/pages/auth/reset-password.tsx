import { Input } from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router";

const ResetPassword = () => {
  const [isEmailVerified] = useState(true);
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [emailData, setEmailData] = useState({
    email: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEmailChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="vertical-spacing sm:min-h-screen py-8">
        {isEmailVerified ? (
          <>
            <div className="vertical-spacing max-w-[40rem] w-full px-6 py-8 my-auto mx-auto">
              <div className="mb-4">
                <h1 className="text-lg md:text-3xl font-bold">
                  Set new password
                </h1>
                <p className="text-black/70">
                  Almost there! Just set your new password.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="vertical-spacing">
                <Input
                  name="newPassword"
                  onChange={handleInputChange}
                  value={formData.newPassword}
                  label="New password"
                  type="password"
                />
                <Input
                  name="confirmPassword"
                  onChange={handleInputChange}
                  label="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                />
                <Link
                  to="/auth"
                  className="text-right font-medium text-primary-500 -mt-2"
                >
                  Forgot Password
                </Link>

                <Button
                  type="submit"
                  className="bg-primary-500 text-lg font-bold py-6 px-12 w-full"
                >
                  Save Password
                </Button>
              </form>

              <div className="flex gap-2 items-center justify-center w-full">
                <p>Don't have an Account?</p>
                <Link
                  className="text-black font-bold"
                  to={"/auth/create-account"}
                >
                  Signup
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="vertical-spacing max-w-[40rem] w-full px-6 py-8 my-auto mx-auto">
              <div className="mb-4">
                <h1 className="text-lg md:text-3xl font-bold">
                  Reset Password
                </h1>
                <p className="text-black/70">
                  We'll send you a link to reset your password.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="vertical-spacing">
                <Input
                  name="email"
                  onChange={handleEmailChange}
                  value={emailData.email}
                  label="Email"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary-500 text-lg font-bold py-6 px-12"
                >
                  Send Link
                </Button>
              </form>

              <div className="flex gap-2 items-center justify-center w-full">
                <p>Remembered Password?</p>
                <Link
                  className="text-black font-bold"
                  to={"/auth/create-account"}
                >
                  Login
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ResetPassword;
