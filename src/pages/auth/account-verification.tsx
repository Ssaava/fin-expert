import { Input } from "@/components/common/Input";
import { Button } from "@/components/ui/button";

const AccountVerification = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="vertical-spacing max-w-[30rem] w-full my-auto">
        <h1 className="text-3xl text-white font-bold text-center">
          Verify Account
        </h1>
        <form onSubmit={handleSubmit} className="vertical-spacing">
          <Input label="PassKey" type="password" />
          <Input label="Set Password" type="password" />
          <Input label="Confirm Password" type="password" />
          <Button
            type="submit"
            className="bg-primary-500 text-lg font-bold mx-auto py-6 px-12  w-full"
          >
            SIGN UP
          </Button>
        </form>
      </div>
    </>
  );
};

export default AccountVerification;
