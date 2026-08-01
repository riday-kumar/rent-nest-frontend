"use client";
import React from "react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { updateRentRequestStatus } from "../../_actions/request_action/requestAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface RentRequest {
  id: string;

  rentStatus: "PENDING" | "APPROVED" | "REJECTED";

  tenant: {
    name: string;
    email: string;
  };

  property: {
    id: string;
    title: string;
    rentAmount: string;
    city: string;
    images: string[];
  };
}

interface Props {
  requests: RentRequest[];
}

const RentReqTableData = ({ requests }: Props) => {
  const router = useRouter();
  // ============ approve and reject function ============
  const handleApprove = async (id: string) => {
    // console.log("Approve:", id);

    const res = await updateRentRequestStatus(id, "APPROVED");
    if (res.success) {
      toast.success("Request approved successfully");
      router.push("/dashboard/landlord");
    } else {
      toast.error("Request approval failed");
    }
  };

  const handleReject = async (id: string) => {
    // console.log("Reject:", id);

    const res = await updateRentRequestStatus(id, "REJECTED");
    if (res.success) {
      toast.success("Request rejected successfully");
      router.push("/dashboard/landlord");
    } else {
      toast.error("Request rejection failed");
    }
  };
  return (
    <TableBody>
      {requests.map((request) => (
        <TableRow key={request.id}>
          {/* Tenant */}

          <TableCell>
            <div>
              <p className="font-medium">{request.tenant.name}</p>

              <p className="text-sm text-muted-foreground">
                {request.tenant.email}
              </p>
            </div>
          </TableCell>

          {/* Property */}

          <TableCell>
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">{request.property.title}</p>

                <p className="text-sm text-muted-foreground">
                  {request.property.city}
                </p>
              </div>
            </div>
          </TableCell>

          {/* Rent */}

          <TableCell>৳{request.property.rentAmount}</TableCell>

          {/* Status */}

          <TableCell>
            <Badge
              variant={
                request.rentStatus === "APPROVED"
                  ? "default"
                  : request.rentStatus === "PENDING"
                    ? "secondary"
                    : "destructive"
              }
            >
              {request.rentStatus}
            </Badge>
          </TableCell>

          {/* Action */}

          <TableCell className="text-right">
            {request.rentStatus === "PENDING" ? (
              <div className="flex justify-end gap-2">
                {/*================== alert dialog and button for approve ================== */}
                <Button
                  onClick={() => handleApprove(request.id)}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Approve
                </Button>

                {/*================== alert dialog and button for reject ================== */}
                <Button
                  onClick={() => handleReject(request.id)}
                  size="sm"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Reject
                </Button>
              </div>
            ) : (
              <Badge
                variant={
                  request.rentStatus === "APPROVED" ? "default" : "destructive"
                }
              >
                {request.rentStatus}
              </Badge>
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default RentReqTableData;
