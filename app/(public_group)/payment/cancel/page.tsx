"use client";

import Link from "next/link";
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentCancelled = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardContent className="flex flex-col items-center py-10 text-center">
          <div className="mb-6 rounded-full bg-amber-100 p-4">
            <CircleAlert className="h-16 w-16 text-amber-600" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Payment Cancelled
          </h1>

          <p className="mt-3 max-w-md text-muted-foreground">
            Your payment was cancelled before it was completed. No money has
            been charged to your account.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button>
              <Link href="/dashboard/tenant">Go to Dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCancelled;
