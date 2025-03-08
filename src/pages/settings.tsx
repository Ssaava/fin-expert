import ManagePassword from "@/components/dashboard/ManagePassword";
import ManageProfile from "@/components/dashboard/ManageProfile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaRegUser } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";

const Settings = () => {
  return (
    <>
      <section>
        <div>
          <h3 className="text-center font-medium text-3xl">Settings</h3>
          <p className="text-center font-medium text-black/70">
            Manage your account preferences and security all in one place
          </p>
          <div>
            <Tabs
              defaultValue="profile"
              className="max-w-[40rem] mt-10 w-full mx-auto"
            >
              <TabsList className="mb-8 bg-transparent flex items-center gap-4 justify-center">
                <TabsTrigger value="profile">
                  <FaRegUser /> Profile
                </TabsTrigger>
                <TabsTrigger value="security">
                  <IoKeyOutline /> Security
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <ManageProfile />
              </TabsContent>
              <TabsContent value="security">
                <ManagePassword />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
