import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../common/Input";
import { PencilIcon } from "lucide-react";

const ManageProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    profileImage: "https://github.com/shadcn.png",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    console.log("Changing", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="p-6 md:p-12 rounded-lg w-full mx-auto bg-white mb-12">
        <h1 className="text-center font-bold text-lg">Manage Profile</h1>
        <div className="w-fit border mx-auto relative h-fit mt-6 rounded-full group">
          <Avatar className="size-20">
            <AvatarImage src={formData.profileImage} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <label
            htmlFor="profile-image"
            className="absolute bottom-0 right-0 bg-primary-500 p-[0.4rem] rounded-full cursor-pointer shadow-md hover:bg-black/90 border-white border-2"
          >
            <PencilIcon className="w-[0.8rem] h-[0.8rem] text-white" />
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
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
