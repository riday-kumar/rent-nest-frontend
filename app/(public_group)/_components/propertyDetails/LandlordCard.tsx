import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Mail } from "lucide-react";
import RequestButton from "./RequestButton";
import { PropertyDetails } from "@/lib/types";

const LandlordCard = ({ property }: { property: PropertyDetails }) => {
  // console.log("property form landlord card", property);
  return (
    <Card className="h-fit sticky top-24 shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">Landlord Information</h2>

        <Separator className="my-5" />

        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-3xl">👨</AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-lg">{property.landlord.name}</h3>

            <p className="text-sm text-muted-foreground">Property Owner</p>
          </div>
        </div>

        <Separator className="my-5" />

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <Mail size={18} />
            <span>{property.landlord.email}</span>
          </div>
        </div>

        <RequestButton
          propertyId={property.id}
          propertyStatus={property.propertyStatus}
        />
      </CardContent>
    </Card>
  );
};

export default LandlordCard;
