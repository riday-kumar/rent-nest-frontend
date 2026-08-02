"use client";

import Link from "next/link";

import { Eye, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteLandlordProperty } from "../../_actions/property/getLandlordsAllProperty";
import { useRouter } from "next/navigation";

interface Property {
  id: string;

  title: string;

  rentAmount: string;

  city: string;

  district: string;

  propertyStatus: "AVAILABLE" | "RENTED";

  images: string[];
}

interface AllPropertiesProps {
  properties: {
    data: Property[];
  };
}

export default function AllProperties({ properties }: AllPropertiesProps) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this property?");

    if (!confirmed) return;

    // console.log("Delete property:", id);

    await deleteLandlordProperty(id);
    router.refresh();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Properties</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>

              <TableHead>Location</TableHead>

              <TableHead>Rent</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {properties?.data.map((property) => (
              <TableRow key={property.id}>
                {/* Property */}

                <TableCell>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium">{property.title}</p>
                    </div>
                  </div>
                </TableCell>

                {/* Location */}

                <TableCell>
                  <div>
                    <p>{property.city}</p>

                    <p
                      className="
                        text-sm 
                        text-muted-foreground
                      "
                    >
                      {property.district}
                    </p>
                  </div>
                </TableCell>

                {/* Rent */}

                <TableCell>৳{property.rentAmount}</TableCell>

                {/* Status */}

                <TableCell>
                  <Badge
                    variant={
                      property.propertyStatus === "AVAILABLE"
                        ? "secondary"
                        : "default"
                    }
                  >
                    {property.propertyStatus}
                  </Badge>
                </TableCell>

                {/* Actions */}

                <TableCell>
                  <div
                    className="
                      flex 
                      justify-end 
                      gap-2
                    "
                  >
                    {/* View */}

                    <Button size="icon" variant="outline">
                      <Link href={`/properties/${property.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>

                    {/* Edit */}

                    <Button size="icon" variant="outline">
                      <Link
                        href={`/dashboard/landlord/properties/update/${property.id}`}
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>

                    {/* Delete */}

                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleDelete(property.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
