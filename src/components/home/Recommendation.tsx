import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Recommendation() {
  return (
    <Card className="xl:w-[350px] w-full">
      <CardHeader>
        <CardTitle>Recommendation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black/50">
          Improve user satisfaction: Act on feedback to boost your fintech
          business in Kampala.
        </p>
      </CardContent>
    </Card>
  );
}
