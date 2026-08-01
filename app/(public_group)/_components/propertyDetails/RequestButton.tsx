"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { createRentalReq } from "../../_actions/property";
import { toast } from "sonner";

const RequestButton = ({
  propertyId,
  propertyStatus,
}: {
  propertyId: string;
  propertyStatus: string;
}) => {
  const handleRentalReq = async () => {
    const res = await createRentalReq(propertyId);
    if (res.success) {
      toast.success("Request sent successfully");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Button
      disabled={propertyStatus === "RENTED"}
      onClick={() => handleRentalReq()}
      className="w-full mt-8 h-11"
    >
      Send Request for this Property
    </Button>
  );
};

export default RequestButton;
