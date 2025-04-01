import { Input } from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router";

const options = ["fintech_user", "regulator", "service_provider", "developer"];
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
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
          <h1 className="text-lg md:text-3xl font-bold">Create Account</h1>
          <p className="text-black/70">
            Join our free financial revolution today
          </p>
        </div>
        <form onSubmit={handleSubmit} className="vertical-spacing">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              onChange={handleInputChange}
              label="First Name"
              value={formData.firstName}
            />
            <Input
              name="lastName"
              onChange={handleInputChange}
              label="Last Name"
              value={formData.lastName}
            />
          </div>
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

          <p className="-mb-2 font-medium text-black/70">
            Which Option Best Describes you
          </p>
          <div className="flex gap-4 flex-wrap  w-full">
            {options?.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={`hover:border-primary-500 hover:text-primary-500 hover:bg-blue-50 duration-200 flex items-center justify-center  py-2 px-4  rounded-lg border ${
                  formData.role === option
                    ? "border-primary-500 text-primary-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  name="role"
                  onChange={handleInputChange}
                  type="radio"
                  className="hidden"
                  value={option}
                  checked={formData.role === option}
                />
                {option}
              </label>
            ))}
          </div>
          <Button
            type="submit"
            className="bg-primary-500 text-lg font-bold mx-auto py-6 px-12 max-w-[20rem] w-full"
          >
            signup
          </Button>
        </form>

        <div className="flex gap-2 items-center justify-center w-full">
          <p>Already have an Account?</p>
          <Link className="text-black font-bold" to={"/auth"}>
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
