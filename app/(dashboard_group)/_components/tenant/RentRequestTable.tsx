"use client";

import { CreditCard } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type RentStatus = "PENDING" | "APPROVED" | "REJECTED";
type PaymentStatus = "PAID" | "UNPAID";

interface RentRequest {
  id: string;

  rentStatus: RentStatus;

  createdAt: string;

  payment: {
    id: string;
    status: PaymentStatus;
  } | null;

  property: {
    id: string;
    title: string;
    city: string;
    rentAmount: string;
    images: string[];
  };
}

interface Props {
  requests: RentRequest[];
}

export default function TenantRentRequestsTable({ requests }: Props) {
  const handlePay = async (requestId: string) => {
    console.log("Pay:", requestId);

    // await createCheckoutSession(requestId)
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Rent Requests</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>

              <TableHead>Rent</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Payment</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
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

                {/* Request Status */}

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

                {/* Payment */}

                <TableCell className="text-right">
                  {request.rentStatus === "APPROVED" ? (
                    request.payment?.status === "PAID" ? (
                      <Button disabled size="sm">
                        Paid
                      </Button>
                    ) : (
                      <Button size="sm" onClick={() => handlePay(request.id)}>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Pay Now
                      </Button>
                    )
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
