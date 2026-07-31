import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface OverviewCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function LandlordOverviewCard({
  title,
  value,
  icon: Icon,
}: OverviewCardProps) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className="rounded-full bg-primary/10 p-4">
          <Icon className="h-7 w-7 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
