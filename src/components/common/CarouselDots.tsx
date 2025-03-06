type DotProps = {
  current: number;
  totalDots: number;
  onDotClick: (index: number) => void;
};
// Dots Component
const CarouselDots = ({ totalDots, current, onDotClick }: DotProps) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalDots }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 rounded-md w-6 cursor-pointer transition-colors ${
            current === index ? "bg-primary-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
