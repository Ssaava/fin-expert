import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../common/Input";

const ManageProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    console.log("Changing", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="p-6 md:p-12 rounded-lg w-full mx-auto bg-white mb-12">
        <h1 className="text-center font-bold text-lg">Manage Profile</h1>
        <div className="w-fit mx-auto relative h-fit mt-6 rounded-full">
          <Avatar className="size-20">
            <AvatarImage src={"https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <form className="flex flex-col gap-6 mt-12">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              type="text"
              label="First Name"
              placeholder="John"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Lule"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="john@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="text"
            label="Role"
            name="role"
            placeholder="User"
            value={formData.role}
            disabled
            onChange={handleChange}
          />

          <Button
            type="submit"
            className="w-full mx-auto bg-primary-500 !py-5 !px-8"
          >
            Update Changes
          </Button>
        </form>
      </div>
    </>
  );
};

export default ManageProfile;
