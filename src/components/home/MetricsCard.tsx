import { ReactNode } from "react";

const MetricsCard = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
      <div className="p-6 bg-primary-300 rounded-xl flex flex-col gap-10 justify-center items-center">
        {children}
        <p className="text-orange-500 font-bold text-lg">{title}</p>
      </div>
    </>
  );
};

export default MetricsCard;
