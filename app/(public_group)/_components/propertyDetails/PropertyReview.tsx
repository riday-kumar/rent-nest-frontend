import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const PropertyReview = () => {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          <div>
            <h4 className="font-semibold">Rakib Hasan</h4>

            <p className="text-yellow-500">★★★★★</p>

            <p className="mt-2 text-muted-foreground">
              Spacious apartment with a peaceful environment. The landlord was
              very cooperative.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyReview;
