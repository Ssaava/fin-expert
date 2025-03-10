import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

const AuthLayout = () => {
  const pathName = useLocation().pathname;
  const [bgImage, setBgImage] = useState("login.png");

  useEffect(() => {
    if (pathName.includes("create-account")) {
      setBgImage("/create-account-bg.png");
    } else {
      setBgImage("/login.png");
    }
  }, [pathName]);

  return (
    <div className="grid lg:grid-cols-2 min-h-screen">
      <div className="auth-py bg-primary-900 flex justify-center">
        <Outlet />
      </div>
      <div className="relative p-6  max-lg:hidden overflow-hidden">
        <img
          src={bgImage}
          alt="Logo"
          className="block w-full object-cover max-h-[55rem] h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
