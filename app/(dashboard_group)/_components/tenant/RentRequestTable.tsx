"use client";

import Image from "next/image";
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

const rentRequests = [
  {
    id: "1",
    tenantId: "tenant-1",
    propertyId: "property-1",
    rentStatus: "APPROVED",
    createdAt: "2026-07-08T06:25:32.446Z",
    updatedAt: "2026-07-08T15:10:25.495Z",

    payment: {
      id: "payment-1",
      status: "PAID",
    },

    property: {
      id: "property-1",
      title: "Luxury Apartment",
      city: "Dhaka",
      rentAmount: "20000",
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
      ],
    },
  },

  {
    id: "2",
    tenantId: "tenant-1",
    propertyId: "property-2",
    rentStatus: "APPROVED",
    createdAt: "2026-07-15T09:30:12.000Z",
    updatedAt: "2026-07-15T09:30:12.000Z",

    payment: null,

    property: {
      id: "property-2",
      title: "Green Villa",
      city: "Narayanganj",
      rentAmount: "18000",
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600",
      ],
    },
  },

  {
    id: "3",
    tenantId: "tenant-1",
    propertyId: "property-3",
    rentStatus: "PENDING",
    createdAt: "2026-07-31T14:30:54.967Z",
    updatedAt: "2026-07-31T14:30:54.967Z",

    payment: null,

    property: {
      id: "property-3",
      title: "City Apartment",
      city: "Chattogram",
      rentAmount: "15000",
      images: [
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600",
      ],
    },
  },

  {
    id: "4",
    tenantId: "tenant-1",
    propertyId: "property-4",
    rentStatus: "REJECTED",
    createdAt: "2026-07-20T10:15:00.000Z",
    updatedAt: "2026-07-21T12:10:00.000Z",

    payment: null,

    property: {
      id: "property-4",
      title: "Lake View Flat",
      city: "Sylhet",
      rentAmount: "25000",
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600",
      ],
    },
  },
];

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
            {rentRequests.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-muted-foreground"
                >
                  No rent requests found.
                </TableCell>
              </TableRow>
            )}

            {rentRequests.map((request) => (
              <TableRow key={request.id}>
                {/* Property */}

                <TableCell>
                  <div className="flex items-center gap-3">
                    {/* <Image
                      src={request.property.images[0]}
                      alt={request.property.title}
                      width={60}
                      height={60}
                      className="rounded-md object-cover"
                    /> */}

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
