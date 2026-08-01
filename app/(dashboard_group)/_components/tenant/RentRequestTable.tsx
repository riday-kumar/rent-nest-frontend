"use client";

import { CreditCard } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createPayment } from "../../_actions/payment_action/createPayment";
import { addReview } from "../../_actions/review_action/review";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

type RentStatus = "PENDING" | "APPROVED" | "REJECTED";
type PaymentStatus = "PAID" | "UNPAID";

interface RentRequest {
  id: string;
  tenantId: string;
  propertyId: string;

  rentStatus: RentStatus;

  createdAt: string;

  payment: {
    id: string;
    status: PaymentStatus;
  } | null;

  property: {
    title: string;
    city: string;
    rentAmount: string;
    review: {
      id: string;
      tenantId: string;
      review: string;
      propertyId: string;
    }[];
  };
}

interface Props {
  requests: RentRequest[];
}

export default function TenantRentRequestsTable({ requests }: Props) {
  const router = useRouter();

  const handlePay = async (requestId: string) => {
    // console.log(requestId);
    await createPayment(requestId);
  };

  const handleReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const propId = formData.get("propId") as string;
    const review = formData.get("review") as string;
    // console.log({ propId, review });
    const res = await addReview(propId, review);
    if (res.success) {
      toast.success("Review added successfully");
      // e.currentTarget.reset();
      router.push("/");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
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
                <TableRow key={request.propertyId}>
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

                  {/* review */}
                  <TableCell className="text-right">
                    {request.rentStatus === "APPROVED" ? (
                      request.property.review.length === 0 ? (
                        // <Button
                        //   size="sm"
                        //   onClick={() => handleReview(request.propertyId)}
                        // >
                        //   Review Now
                        // </Button>

                        <Dialog>
                          <DialogTrigger
                            render={
                              <Button variant="outline">Review Now</Button>
                            }
                          />
                          <DialogContent className="sm:max-w-sm">
                            <form onSubmit={handleReview}>
                              <DialogHeader>
                                <DialogTitle>Write a Review</DialogTitle>
                                <DialogDescription>
                                  Share your experience with this property.
                                </DialogDescription>
                              </DialogHeader>

                              <FieldGroup>
                                <Field>
                                  <Input
                                    hidden
                                    id="propId"
                                    name="propId"
                                    value={request.propertyId}
                                  />
                                </Field>
                                <Field>
                                  <Textarea id="review" name="review" />
                                </Field>
                              </FieldGroup>

                              <DialogFooter>
                                <DialogClose
                                  render={
                                    <Button variant="outline">Cancel</Button>
                                  }
                                />
                                <Button type="submit">Save changes</Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button disabled size="sm">
                          Reviewed
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
    </>
  );
}
