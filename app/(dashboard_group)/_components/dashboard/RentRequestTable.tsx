"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

const requests = [
  {
    id: "4a786195-6653-4547-bc17-5527a4fd4704",
    tenantId: "01KX01JVRN5ZKW6B4692YN6XQ0",
    propertyId: "7a3463e6-e426-4a89-b999-e8836e576995",
    rentStatus: "REJECTED",
    createdAt: "2026-07-08T06:44:16.501Z",
    updatedAt: "2026-07-08T15:10:25.587Z",
    tenant: {
      name: "test two",
      email: "test2@mail.com",
    },
    property: {
      id: "7a3463e6-e426-4a89-b999-e8836e576995",
      title: "Rob Sikdar Flat",
      description:
        "A spacious and well-ventilated apartment located in a peaceful neighborhood.",
      rentAmount: "18000",
      address: "opposite of city corporation",
      city: "Narayanganj",
      district: "Narayanganj",
      division: "Dhaka",
      propertyStatus: "RENTED",
      size: 1450,
      floorType: "5th Floor",
      bedRoom: 3,
      bathroom: 2,
      balconies: 2,
      livingRoom: true,
      drawingRoom: true,
      dinningRoom: true,
      kitchen: 1,
      servantRoom: false,
      parking: true,
      lift: true,
      serviceCharge: "3000",
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
      ],
      amenities: ["WiFi", "Generator", "Security", "Gas", "CCTV"],
      categoryId: 1,
      landlordId: "01KX01GEBSE7F1VKVRPN68M9S9",
      createdAt: "2026-07-08T05:24:44.385Z",
      updatedAt: "2026-07-08T20:16:30.016Z",
    },
  },
  {
    id: "86f0914d-0e4e-4da6-acc1-a284934aa7d3",
    tenantId: "01KX01JHXD8JEYX8FZ7AWM4SDS",
    propertyId: "7a3463e6-e426-4a89-b999-e8836e576995",
    rentStatus: "APPROVED",
    createdAt: "2026-07-08T06:25:32.446Z",
    updatedAt: "2026-07-08T15:10:25.495Z",
    tenant: {
      name: "test one",
      email: "test1@mail.com",
    },
    property: {
      id: "7a3463e6-e426-4a89-b999-e8836e576995",
      title: "Rob Sikdar Flat",
      description:
        "A spacious and well-ventilated apartment located in a peaceful neighborhood.",
      rentAmount: "18000",
      address: "opposite of city corporation",
      city: "Narayanganj",
      district: "Narayanganj",
      division: "Dhaka",
      propertyStatus: "RENTED",
      size: 1450,
      floorType: "5th Floor",
      bedRoom: 3,
      bathroom: 2,
      balconies: 2,
      livingRoom: true,
      drawingRoom: true,
      dinningRoom: true,
      kitchen: 1,
      servantRoom: false,
      parking: true,
      lift: true,
      serviceCharge: "3000",
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
      ],
      amenities: ["WiFi", "Generator", "Security", "Gas", "CCTV"],
      categoryId: 1,
      landlordId: "01KX01GEBSE7F1VKVRPN68M9S9",
      createdAt: "2026-07-08T05:24:44.385Z",
      updatedAt: "2026-07-08T20:16:30.016Z",
    },
  },
  {
    id: "86f0914d-0e4e-4da6-acc1-a284934aa7d4",
    tenantId: "01KX01JHXD8JEYX8FZ7AWM4SDS",
    propertyId: "7a3463e6-e426-4a89-b999-e8836e576995",
    rentStatus: "PENDING",
    createdAt: "2026-07-08T06:25:32.446Z",
    updatedAt: "2026-07-08T15:10:25.495Z",
    tenant: {
      name: "test one",
      email: "test1@mail.com",
    },
    property: {
      id: "7a3463e6-e426-4a89-b999-e8836e576995",
      title: "Rob Sikdar Flat",
      description:
        "A spacious and well-ventilated apartment located in a peaceful neighborhood.",
      rentAmount: "18000",
      address: "opposite of city corporation",
      city: "Narayanganj",
      district: "Narayanganj",
      division: "Dhaka",
      propertyStatus: "RENTED",
      size: 1450,
      floorType: "5th Floor",
      bedRoom: 3,
      bathroom: 2,
      balconies: 2,
      livingRoom: true,
      drawingRoom: true,
      dinningRoom: true,
      kitchen: 1,
      servantRoom: false,
      parking: true,
      lift: true,
      serviceCharge: "3000",
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
      ],
      amenities: ["WiFi", "Generator", "Security", "Gas", "CCTV"],
      categoryId: 1,
      landlordId: "01KX01GEBSE7F1VKVRPN68M9S9",
      createdAt: "2026-07-08T05:24:44.385Z",
      updatedAt: "2026-07-08T20:16:30.016Z",
    },
  },
];

export default function RentRequestTable() {
  const handleApprove = async (id: string) => {
    console.log("Approve:", id);

    // await updateRentRequestStatus(id, "APPROVED");
  };

  const handleReject = async (id: string) => {
    console.log("Reject:", id);

    // await updateRentRequestStatus(id, "REJECTED");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rent Requests</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>

              <TableHead>Property</TableHead>

              <TableHead>Rent</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

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
                      {/* alert dialog and button for approve */}
                      <AlertDialog>
                        <AlertDialogTrigger
                          render={
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleApprove(request.id)}
                            >
                              Approve
                            </Button>
                          }
                        />
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently approve the rent request.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      {/* alert dialog and button for reject */}
                      <AlertDialog>
                        <AlertDialogTrigger
                          render={
                            <Button
                              size="sm"
                              className="bg-red-600 hover:bg-red-700"
                              onClick={() => handleReject(request.id)}
                            >
                              Reject
                            </Button>
                          }
                        />
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently reject the rent request.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  ) : (
                    <Badge
                      variant={
                        request.rentStatus === "APPROVED"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {request.rentStatus}
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}

            {requests.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-muted-foreground"
                >
                  No rent requests found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
