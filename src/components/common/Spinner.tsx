// components/Spinner.tsx
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white" | "gray";
  className?: string;
}

export const Spinner = ({
  size = "md",
  color = "primary",
  className,
}: SpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-[5px]",
  };

  const colorClasses = {
    primary: "border-t-primary-500 border-transparent",
    white: "border-t-white border-transparent",
    gray: "border-t-gray-400 border-transparent",
  };

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Optional: Add a centered spinner with text
interface LoadingOverlayProps {
  text?: string;
  size?: SpinnerProps["size"];
  color?: SpinnerProps["color"];
}

export const LoadingOverlay = ({
  text = "Loading...",
  size = "md",
  color = "primary",
}: LoadingOverlayProps) => {
  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center flex-col gap-4 z-50">
      <Spinner size={size} color={color} />
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  );
};
