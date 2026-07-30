import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const Amenities = ({ amenities }: { amenities: string[] }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {amenities.map((item) => (
        <Badge key={item} variant="outline" className="px-4 py-2">
          <CheckCircle2 className="mr-2 h-5 w-5" />
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default Amenities;
