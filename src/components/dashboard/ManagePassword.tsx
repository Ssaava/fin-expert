import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../common/Input";

const ManageProfile = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="p-6 md:p-12 rounded-lgw-full mx-auto bg-white">
        <h1 className="text-center font-bold text-lg">Manage Password</h1>

        <form className="flex flex-col gap-6">
          <Input
            type="password"
            label="Old Password"
            placeholder="old password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
          />

          <Input
            type="password"
            label="New Password"
            placeholder="new password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button
            type="submit"
            className="w-full mx-auto bg-primary-500 !py-5 !px-8"
          >
            Update Password
          </Button>
        </form>
      </div>
    </>
  );
};

export default ManageProfile;
