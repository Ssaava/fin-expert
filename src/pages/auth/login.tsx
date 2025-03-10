import { Input } from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="vertical-spacing max-w-[40rem] w-full px-6 py-8 my-auto">
        <div className="mb-4">
          <h1 className="text-lg md:text-3xl font-bold">Welcome Back</h1>
          <p className="text-black/70">Please login to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="vertical-spacing">
          <Input
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            label="email"
          />
          <Input
            name="password"
            onChange={handleInputChange}
            label="Password"
            type="password"
            value={formData.password}
          />
          <Link
            to="/auth"
            className="text-right font-medium text-primary-500 -mt-2"
          >
            Forgot Password
          </Link>

          <Button
            type="submit"
            className="bg-primary-500 text-lg font-bold mx-auto py-6 px-12 max-w-[20rem] w-full"
          >
            Login
          </Button>
        </form>

        <div className="flex gap-2 items-center justify-center w-full">
          <p>Don't have an Account?</p>
          <Link className="text-black font-bold" to={"/auth/create-account"}>
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
