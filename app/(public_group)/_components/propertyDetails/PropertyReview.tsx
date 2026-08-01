import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PropertyDetails } from "@/lib/types";

type TReview = {
  id: string;
  tenantId: string;
  review: string;
  propertyId: string;
  createdAt: string;
  updatedAt: string;
  tenant: {
    name: string;
  };
};

const PropertyReview = ({
  reviews,
}: {
  reviews: PropertyDetails["review"];
}) => {
  return (
    <>
      {reviews.map((review: TReview) => (
        <Card key={review.id}>
          <CardContent className="p-5">
            <div className="flex gap-4">
              <Avatar>
                <AvatarFallback>{review.tenant.name[0]}</AvatarFallback>
              </Avatar>

              <div>
                <h4 className="font-semibold">{review.tenant.name}</h4>

                <p className="text-yellow-500">★★★★★</p>

                <p className="mt-2 text-muted-foreground">{review.review}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default PropertyReview;
