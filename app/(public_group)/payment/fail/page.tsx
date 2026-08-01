"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentFailed = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4">
      <Card className="w-full max-w-lg shadow-lg">
        <CardContent className="flex flex-col items-center py-10 text-center">
          <div className="mb-6 rounded-full bg-red-100 p-4">
            <XCircle className="h-16 w-16 text-red-600" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight">Payment Failed</h1>

          <p className="mt-3 max-w-md text-muted-foreground">
            Unfortunately, your payment could not be processed. Please check
            your payment details or try again later.
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

export default PaymentFailed;
