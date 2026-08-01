"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentSuccess = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardContent className="flex flex-col items-center py-10 text-center">
          <div className="mb-6 rounded-full bg-green-100 p-4">
            <CheckCircle2 className="h-16 w-16 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Payment Successful!
          </h1>

          <p className="mt-3 max-w-md text-muted-foreground">
            Thank you! Your payment has been completed successfully. Your
            transaction has been recorded, and your rental payment is now
            confirmed.
          </p>

          <Button size="lg" className="mt-8 w-full sm:w-auto">
            <Link href="/dashboard/tenant">Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
