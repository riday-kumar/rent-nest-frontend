import React from "react";
import { Badge } from "@/components/ui/badge";
import { Landmark, MapPin } from "lucide-react";

const PropertyHeading = ({
  categoryName,
  title,
  address,
  city,
  division,
  rentAmount,
}: {
  rentAmount: string;
  categoryName: string;
  title: string;
  address: string;
  city: string;
  division: string;
}) => {
  return (
    <div>
      <Badge>{categoryName}</Badge>

      <h1 className="text-4xl font-bold mt-3">{title}</h1>

      <div className="flex flex-wrap gap-6 mt-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {address}, {city}
        </div>

        <div className="flex items-center gap-2">
          <Landmark size={18} />
          {division}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-primary mt-5">
        ৳ {rentAmount.toLocaleString()}
        <span className="text-base font-normal text-muted-foreground">
          {" "}
          /month
        </span>
      </h2>
    </div>
  );
};

export default PropertyHeading;
