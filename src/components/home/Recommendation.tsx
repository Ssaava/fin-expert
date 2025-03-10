import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type Props = {
  title: string;
  value: string;
  className?: string;
};
export function Recommendation({ title, value, className }: Props) {
  return (
    <Card className={`${className} w-full relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full rounded-lg">
        <img src="/stars.png" className="" />
      </div>
      <div className="z-10 flex flex-col gap-4">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black/50">{value}</p>
        </CardContent>
      </div>
    </Card>
  );
}
