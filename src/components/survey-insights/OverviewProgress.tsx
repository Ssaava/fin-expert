type Props = {
  background?: string;
  width?: string;
  title: string;
};

const OverviewProgress = ({
  background = "bg-orange-400 ",
  width = "50",
  title,
}: Props) => {
  return (
    <>
      <div className="md:flex max-md:flex-col gap-4 items-center">
        <p className="text-black/60 w-[10.313rem]">{title}</p>
        <div className="flex-1 flex gap-4 items-center max-md:mt-2">
          <div
            className={`h-5 sm:h-10 ${background} rounded-lg`}
            style={{ width: `${width}%` }}
          ></div>
          <p className="text-black/80 font-medium">{width}%</p>
        </div>
      </div>
    </>
  );
};

export default OverviewProgress;
