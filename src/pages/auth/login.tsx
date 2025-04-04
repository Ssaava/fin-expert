/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/common/Input";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/schemas/schema";
import { useAuthStore } from "@/store/store";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formDataInitials = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState<z.infer<typeof LoginSchema>>({
    ...formDataInitials,
  });
  const [errors, setErrors] = useState<z.infer<typeof LoginSchema>>({
    ...formDataInitials,
  });

  const loginUser = useAuthStore((state) => state.loginUser);
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
    const validForm = LoginSchema.safeParse(formData);
    if (validForm.success) {
      const response: any = await loginUser(formData);
      if (response.status == 200) {
        toast.success("User logged in Successfully", {
          description: response.data.message,
        });
        setFormData({ ...formDataInitials });
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
          <h1 className="text-lg md:text-3xl font-bold">Welcome Back</h1>
          <p className="text-black/70">Please login to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="vertical-spacing">
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
            error={errors.password}
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
            {isAuthenticating ? "...logging in" : "login"}
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
