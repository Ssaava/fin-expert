import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Outlet } from "react-router";

const LandingPageLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingPageLayout;
