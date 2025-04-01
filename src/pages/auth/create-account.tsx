/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { RegisterSchema } from "@/schemas/schema";
import { useAuthStore } from "@/store/store";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const options = ["fintech_user", "regulator", "service_provider", "developer"];
const formDataInitials = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  category: "",
};
const CreateAccount = () => {
  const [formData, setFormData] = useState<z.infer<typeof RegisterSchema>>({
    ...formDataInitials,
  });
  const [errors, setErrors] = useState<z.infer<typeof RegisterSchema>>({
    ...formDataInitials,
  });
  const navigate = useNavigate();
  const registerUser = useAuthStore((state) => state.registerUser);
  const isAuthenticating = useAuthStore((state) => state.authenticating);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...formDataInitials });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const validForm = RegisterSchema.safeParse(formData);
    if (validForm.success) {
      const response: any = await registerUser(formData);
      if (response.status == 201) {
        toast.success(response.data.message);
        setFormData({ ...formDataInitials });
        navigate("/auth");
      } else {
        toast.error("An Error Occurred", {
          description: response.data.detail,
        });
      }
    } else {
      const formErrors = Array(validForm.error.errors)[0];
      formErrors.map((error) => {
        setErrors((prev) => ({
          ...prev,
          [error.path[0]]: error.message,
        }));
      });
    }
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
              name="first_name"
              onChange={handleInputChange}
              label="First Name"
              value={formData.first_name}
              error={errors.first_name}
            />
            <Input
              name="last_name"
              onChange={handleInputChange}
              label="Last Name"
              value={formData.last_name}
              error={errors.last_name}
            />
          </div>
          <Input
            name="email"
            onChange={handleInputChange}
            value={formData.email}
            label="email"
            error={errors.email}
          />
          <Input
            name="password"
            onChange={handleInputChange}
            label="Password"
            type="password"
            value={formData.password}
            error={errors.email}
          />

          <p className="-mb-2 font-medium text-black/70">
            Which Option Best Describes you
          </p>
          <div className="flex gap-4 flex-wrap  w-full">
            {options?.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={`hover:border-primary-500 hover:text-primary-500 hover:bg-blue-50 duration-200 flex items-center justify-center  py-2 px-4  rounded-lg border ${
                  formData.category === option
                    ? "border-primary-500 text-primary-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  name="category"
                  onChange={handleInputChange}
                  type="radio"
                  className="hidden"
                  value={option}
                  checked={formData.category === option}
                />
                {option}
              </label>
            ))}
          </div>
          {errors.category && (
            <span className="text-sm text-red-500">{errors.category}</span>
          )}
          <Button
            type="submit"
            className="bg-primary-500 text-lg font-bold mx-auto py-6 px-12 max-w-[20rem] w-full"
          >
            {isAuthenticating ? "...signing up" : "signup"}
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
